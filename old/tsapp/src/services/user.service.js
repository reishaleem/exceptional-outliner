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

async function usernameExists(username) {
    const response = await axios.get(API_URL + `checkUsernameExists/${username}`);
    if (response && response.data) {
        //console.log(response.data)
        return response.data.taken;
    }
   
}

export default {
    createUser,
    usernameExists,
}