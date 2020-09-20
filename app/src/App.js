import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import HomePage from "./components/pages/public/HomePage/HomePage";

import "./App.css";
import "fontsource-roboto";
import AboutPage from "./components/pages/public/AboutPage/AboutPage";
import { Switch, Route } from "react-router-dom";

function App() {
    function handleClick1() {
        axios
            .get("/api/users")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    function handleClick2() {
        axios
            .get("/api/health")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <div className="App">
            <button onClick={handleClick1}>Hi</button>
            <button onClick={handleClick2}>Hi2</button>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} exact />
            </Switch>
        </div>
    );
}

export default App;
