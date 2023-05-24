import axios from './../utils/axios.js';

//CURD operations for sessions.
function getSessions(param) {
    return axios.get(`/sessions`, param);  
}
function postSessions(data) {
    return axios.post(`/sessions`,data);
}
function updateSessions(data) {
    return axios.put(`/sessions/${data.id}`,data);
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
