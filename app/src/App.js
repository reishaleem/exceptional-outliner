import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    function handleClick1() {
        axios
            .get("https://0.0.0.0:5000/users")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    function handleClick2() {
        axios
            .get("https://0.0.0.0:5000/health")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick1}>Hi</button>
                <button onClick={handleClick2}>Hi2</button>
            </header>
        </div>
    );
}

export default App;
