import axios, { AxiosResponse } from "axios";

const API_URL = "/api/users";

interface Response {
    success?: string;
    error?: string;
}

async function createUser(name: string, email: string, password: string) {
    const response: Response = {};
    try {
        const { data }: AxiosResponse<string> = await axios.post(API_URL, {
            name: name,
            email: email,
            password: password,
        });
        response.success = data;
    } catch (error) {
        if (error.response.status === 400) {
            response.error = "An account with that email is already in use!";
        } else if (error.response.status === 500) {
            response.error =
                "Something went wrong on our end. Please try again!";
        }
    }
    return response;
}

const exports = {
    createUser,
};

export default exports;
