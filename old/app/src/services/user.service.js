import axios from "axios";

const API_URL = "/api/users/";

const addUser = (name, username, email, password, bio) => {
    return axios.post(API_URL + "create", {
        username,
        email,
        name,
        password,
        bio,
    });
};

export default {
    addUser,
};
