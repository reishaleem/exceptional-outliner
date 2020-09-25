import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/wikis/";

const createWiki = (ownerId, universeId, name, body) => {
    return axios.post(API_URL + `${ownerId}/${universeId}/create`, {
        name: name,
        body: body,
    });
};

const getWikiById = (ownerId, universeId, wikiId) => {
    return axios.get(API_URL + `${ownerId}/${universeId}/get/${wikiId}`);
};

const getWikisByUniverse = (ownerId, universeId) => {
    return axios.get(API_URL + `${ownerId}/${universeId}/getWikis`);
};
const getWikisByUser = (ownerId) => {
    return axios.get(API_URL + `${ownerId}/getAllWikis`, {
        headers: authHeader(),
    });
};

const updateWiki = (ownerId, universeId, wikiId, name, body) => {
    return axios.put(API_URL + `${ownerId}/${universeId}/update/${wikiId}`, {
        name: name,
        body: body,
    });
};

const deleteWiki = (ownerId, universeId, wikiId) => {
    return axios.delete(API_URL + `${ownerId}/${universeId}/delete/${wikiId}`);
};

export default {
    createWiki,
    getWikiById,
    getWikisByUniverse,
    getWikisByUser,
    updateWiki,
    deleteWiki,
};
