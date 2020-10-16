import axios from "axios"

const API_URL = "/api/users/"

function createUser(name, username, email, password) {
    return axios.post(API_URL + `create`, {
        name,
        username,
        email,
        password
    });
}

export default {
    createUser,
}