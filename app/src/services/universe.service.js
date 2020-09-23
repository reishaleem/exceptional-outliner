import axios from "axios";

const API_URL = "/api/universes/";

const createUniverse = (ownerId, name, description) => {
    return axios.post(API_URL + `${ownerId}/create`, {
        name: name,
        description: description,
    });
};

const getUserUniverseList = (id) => {
    return axios.get(API_URL + `${id}/getUniverses`);
};

export default { createUniverse, getUserUniverseList };
