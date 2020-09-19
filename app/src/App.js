import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import HomePage from "./components/pages/public/HomePage/HomePage";

import "./App.css";
import "fontsource-roboto";
import AboutPage from "./components/pages/public/AboutPage/AboutPage";

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

            <AboutPage />
        </div>
    );
}

export default App;
