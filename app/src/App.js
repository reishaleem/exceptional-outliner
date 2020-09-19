import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

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
            <header className="App-header">
                <button onClick={handleClick1}>Hi3</button>
                <button onClick={handleClick2}>Hi2</button>
            </header>
        </div>
    );
}

export default App;
