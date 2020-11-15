import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getAccessToken, setAccessToken } from "./utilities/auth";
import axios from "axios";

import Home from "./components/pages/public/Home/Home";
import Login from "./components/pages/public/Login/Login";
import Register from "./components/pages/public/Register/Register";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";
function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch("http://localhost:5000/refresh-token", {
        //     method: "POST",
        //     credentials: "include",
        // }).then(async (response) => {
        //     const x = await response.json();
        //     setAccessToken(x.accessToken);
        //     console.log(x);
        //     setLoading(false);
        // });
        axios
            .post("/refresh-token", {
                withCredentials: true,
            })
            .then((response) => {
                const { accessToken } = response.data;
                setAccessToken(accessToken);
                setLoading(false);
            });
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
