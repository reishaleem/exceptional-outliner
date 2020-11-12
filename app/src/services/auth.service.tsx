import axios, { AxiosResponse } from "axios";

const API_URL = "/api/auth";

async function login(email: string, password: string) {
    const response = await axios.post(API_URL + "/login", {
        email: email,
        password: password,
    });
    return response;
}

const exports = {
    login,
};

export default exports;
