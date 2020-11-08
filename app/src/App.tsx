import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/public/Home/Home";
import Login from "./components/pages/public/Login/Login";
import Register from "./components/pages/public/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
