import React, { useEffect } from "react";
import axios from "axios";

const UserDashboard: React.FC = () => {
    useEffect(() => {
        async function res() {
            try {
                const r = await axios.get("/api/universes");
                console.log(r);
            } catch (err) {
                console.log(err);
            }
        }
        res();
    }, []);
    return <h1>Dashboard</h1>;
};

export default UserDashboard;
