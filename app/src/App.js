import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    function handleClick() {
        axios
            .get("users")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick}>Hi</button>
            </header>
        </div>
    );
}

export default App;
