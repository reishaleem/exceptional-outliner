import axios from "axios"

const API_URL = "/api/universes/"

function hello() {
    console.log("Hi");
}

const createUniverse = (ownerId, name, description) => {
    return axios.post(
        API_URL + `${ownerId}/create`,
        {
            name: name,
            description: description,
        },
    );
};

export default {
    hello,
    createUniverse
}