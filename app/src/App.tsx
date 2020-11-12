import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/public/Home/Home";
import Login from "./components/pages/public/Login/Login";
import Register from "./components/pages/public/Register/Register";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";

function App() {
    return (
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
    );
}

export default App;
