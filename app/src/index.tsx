import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    concat,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import reportWebVitals from "./reportWebVitals";

import { getAccessToken } from "./utilities/auth";

const httpLink = createHttpLink({
    uri: "/graphql",
});
const authMiddleware = new ApolloLink((operation, forward) => {
    const token = getAccessToken();
    console.log("Token ", token);
    // add the authorization to the headers
    operation.setContext({
        headers: {
            authorization: token ? `bearer ${token}` : "",
        },
    });

    return forward(operation);
});

const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
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
