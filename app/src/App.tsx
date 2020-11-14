import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./components/pages/public/Home/Home";
import Login from "./components/pages/public/Login/Login";
import Register from "./components/pages/public/Register/Register";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    {/* public routes */}
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>

                    {/* application routes (must be logged in to access) */}
                    <Route path="/dashboard" exact>
                        <UserDashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
