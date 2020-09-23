import axios from "axios";

const API_URL = "/api/wikis/";

// const createUniverse = (ownerId, name, description) => {
//     return axios.post(API_URL + `${ownerId}/create`, {
//         name: name,
//         description: description,
//     });
// };

const getWikisByUniverse = (ownerId, universeId) => {
    return axios.get(API_URL + `${ownerId}/getUniverses`);
};
const getWikisByUser = (ownerId) => {
    return axios.get(API_URL + `${ownerId}/getAllWikis`);
};

export default { getWikisByUser };
