import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/public/Home/Home";
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
