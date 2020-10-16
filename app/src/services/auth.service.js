import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "/api/auth/";

const login = async (username, password) => {
    const response = await axios.post(API_URL + "login", {
        username,
        password,
    });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return jwtDecode(user.accessToken);
    } else {
        return null;
    }
};

export default {
    login,
    logout,
    getCurrentUser,
};