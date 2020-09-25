import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/universes/";

const createUniverse = (ownerId, name, description) => {
    return axios.post(API_URL + `${ownerId}/create`, {
        name: name,
        description: description,
    });
};

const getUniverseById = (ownerId, universeId) => {
    return axios.get(API_URL + `${ownerId}/get/${universeId}`);
};

const getUserUniverseList = (id) => {
    return axios.get(API_URL + `${id}/getUniverses`, {
        headers: authHeader(),
    });
};

const deleteUniverse = (ownerId, universeId) => {
    return axios.delete(API_URL + `${ownerId}/delete/${universeId}`);
};

export default {
    getUniverseById,
    createUniverse,
    getUserUniverseList,
    deleteUniverse,
};
