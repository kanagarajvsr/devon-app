import axios from './../utils/axios.js';

function getSessions(param) {
    return axios.get(`/sessions?day=${param}`);  
}
function postSessions(data) {
    return axios.post(`/sessions`,data);
}
function updateSessions(id,data) {
    return axios.put(`/sessions/${id}`,data);
}
function deleteSessions(id) {
    return axios.delete(`/sessions/${id}`,{id});
}

export {
    getSessions,
    postSessions,
    updateSessions,
    deleteSessions
};
