import axios from "axios";

const API_URL = "/api/wikis/";

const createWiki = (ownerId, universeId, name, body) => {
    return axios.post(API_URL + `${ownerId}/${universeId}/create`, {
        name: name,
        body: body,
    });
};

const getWikisByUniverse = (ownerId, universeId) => {
    return axios.get(API_URL + `${ownerId}/${universeId}/getWikis`);
};
const getWikisByUser = (ownerId) => {
    return axios.get(API_URL + `${ownerId}/getAllWikis`);
};

const deleteWiki = (ownerId, universeId, wikiId) => {
    return axios.delete(API_URL + `${ownerId}/${universeId}/delete/${wikiId}`);
};

export default { createWiki, getWikisByUniverse, getWikisByUser, deleteWiki };
