import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppRoute from "./components/atoms/AppRoute/AppRoute";
import AuthRoute from "./components/atoms/AuthRoute/AuthRoute";
import Home from "./components/pages/public/Home/Home";
import Login from "./components/pages/public/Login/Login";
import Register from "./components/pages/public/Register/Register";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";
import UserSettings from "./components/pages/app/UserSettings/UserSettings";

import AuthService from "./services/auth.service";
import UserWorldsList from "./components/pages/app/UserWorldList/UserWorldList";
import CreateWorld from "./components/pages/app/CreateWorld/CreateWorld";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function refreshToken() {
            await AuthService.refreshAccessToken();
            setLoading(false);
        }
        refreshToken();
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <BrowserRouter>
            <Switch>
                {/* public routes */}
                <Route path="/" exact>
                    <Home />
                </Route>
                <AuthRoute path="/register">
                    <Register />
                </AuthRoute>
                <AuthRoute path="/login">
                    <Login />
                </AuthRoute>

                {/* application routes (must be logged in to access) */}
                <AppRoute path="/dashboard" exact>
                    <UserDashboard />
                </AppRoute>
                <AppRoute path="/settings" exact>
                    <UserSettings />
                </AppRoute>
                <AppRoute path="/worlds" exact>
                    <UserWorldsList />
                </AppRoute>
                <AppRoute path="/worlds/new" exact>
                    <CreateWorld />
                </AppRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
