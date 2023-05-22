import axios from '../utils/axios.js';

function getChildren() {
    return axios.get('/children');
}
function postChildren(data) {
    return axios.post('/children',data);
}
function updateChildren(id,data) {
    return axios.put(`/children/${id}`,{...data});
}
function deleteChildren(id) {
    return axios.delete(`/children/${id}`);
}

export {
    getChildren,
    postChildren,
    updateChildren,
    deleteChildren
};
