import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/public/Homepage/Homepage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
