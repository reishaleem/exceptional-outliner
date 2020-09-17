import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    function handleClick() {
        axios
            .get("https://localhost:5000/users")
            .then((res) => console.log(res.data));
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
