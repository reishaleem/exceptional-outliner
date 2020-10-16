import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/public/Homepage/Homepage";
import SignUp from "./components/pages/public/SignUp/SignUp";
import Login from "./components/pages/public/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/register" exact>
                    <SignUp />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
