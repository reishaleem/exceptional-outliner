import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Public/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Navbar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
