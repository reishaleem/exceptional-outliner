import axios, { AxiosResponse } from "axios";

const API_URL = "/api/users";

interface User {
    name: string;
    email: string;
    password: string;
}

async function createUser(name: string, email: string, password: string) {
    const { data }: AxiosResponse<User> = await axios.post(API_URL);
    return data;
}

const exports = {
    createUser,
};

export default exports;
