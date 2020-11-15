import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    createHttpLink,
    from,
    InMemoryCache,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import AuthService from "./services/auth.service";
import { decode } from "jsonwebtoken";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = AuthService.getAccessToken();
    console.log("Token ", token);
    // add the authorization to the headers
    operation.setContext({
        headers: {
            authorization: token ? `bearer ${token}` : "",
        },
    });

    return forward(operation);
});

const tokenRefreshLink = new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: () => {
        const token = AuthService.getAccessToken();
        if (!token) return true;

        try {
            const { exp }: any = decode(token);
            return Date.now() < exp * 1000;
        } catch (error) {
            return false;
        }
    },
    fetchAccessToken: () => {
        return fetch("http://localhost:5000/refresh-token", {
            method: "POST",
            credentials: "include",
        });
    },
    handleFetch: (accessToken) => {
        AuthService.setAccessToken(accessToken);
    },
    handleError: (err) => {
        // full control over handling token fetch Error
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
    },
});

const client = new ApolloClient({
    link: from([tokenRefreshLink, authMiddleware, httpLink]),
    cache: new InMemoryCache(),
    credentials: "include",
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
