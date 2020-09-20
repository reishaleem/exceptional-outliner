import axios from "axios";

const API_URL = "/api/users/";

const addUser = (name, username, email, password, bio) => {
    return axios.post(API_URL + "add", {
        username,
        email,
        name,
        password,
        bio,
    });
};

// add jwt stuff later. Can't GET with a body...so...just do later.
const login = (username, password) => {
    return axios.get(API_URL + "login", {
        username,
        password,
    });
};

export default {
    addUser,
    login,
};
