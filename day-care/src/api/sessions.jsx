import  callToBackend from './../utils/axios.js';

//CURD operations for sessions.
function getSessions(param) {
    return callToBackend(`/sessions`,"GET", param);  
}
function postSessions(data) {
    callToBackend(`/sessions`,"POST",{data:data});
}
function updateSessions(data) {
    return callToBackend(`/sessions/${data.id}`,"PUT",{data:data});
}
function deleteSessions(id) {
    return callToBackend(`/sessions/${id}`,"DELETE",{id:id});
}

export {
    getSessions,
    postSessions,
    updateSessions,
    deleteSessions
};
