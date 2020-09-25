import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/wikis/";

const createWiki = (ownerId, universeId, name, body) => {
    return axios.post(
        API_URL + `${ownerId}/${universeId}/create`,
        {
            name: name,
            body: body,
        },
        {
            headers: authHeader(),
        }
    );
};

const getWikiById = (ownerId, universeId, wikiId) => {
    return axios.get(API_URL + `${ownerId}/${universeId}/get/${wikiId}`, {
        headers: authHeader(),
    });
};

const getWikisByUniverse = (ownerId, universeId) => {
    return axios.get(API_URL + `${ownerId}/${universeId}/getWikis`, {
        headers: authHeader(),
    });
};
const getWikisByUser = (ownerId) => {
    return axios.get(API_URL + `${ownerId}/getAllWikis`, {
        headers: authHeader(),
    });
};

const updateWiki = (ownerId, universeId, wikiId, name, body) => {
    return axios.put(
        API_URL + `${ownerId}/${universeId}/update/${wikiId}`,
        {
            name: name,
            body: body,
        },
        {
            headers: authHeader(),
        }
    );
};

const deleteWiki = (ownerId, universeId, wikiId) => {
    return axios.delete(API_URL + `${ownerId}/${universeId}/delete/${wikiId}`, {
        headers: authHeader(),
    });
};

export default {
    createWiki,
    getWikiById,
    getWikisByUniverse,
    getWikisByUser,
    updateWiki,
    deleteWiki,
};
