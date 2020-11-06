import axios from "axios"

const API_URL = "/api/universes/"

function hello() {
    console.log("Hi");
}

const createUniverse = (ownerId, name, genre, description) => {
    return axios.post(
        API_URL + `${ownerId}/create`,
        {
            name: name,
            genre: genre,
            description: description,
        },
    );
};

export default {
    hello,
    createUniverse
}