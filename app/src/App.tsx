import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/public/Homepage/Homepage";
import SignUp from "./components/pages/public/SignUp/SignUp";
import Login from "./components/pages/public/Login/Login";
import Features from "./components/pages/public/Features/Features";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/features" exact>
                    <Features />
                </Route>
                <Route path="/register" exact>
                    <SignUp />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>

                <Route path="/app" exact>
                    <UserDashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
