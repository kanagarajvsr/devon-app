import callToBackend from '../utils/axios.js';
//CURD operations for children.
function getChildren() {
    return callToBackend('/children',"GET");
}
function postChildren(data) {
    return callToBackend('/children',"POST",{data});
}
function updateChildren(id,data) {
    return callToBackend(`/children/${id}`,"PUT",{data});
}
function deleteChildren(id) {
    return callToBackend(`/children/${id}`,"DELETE");
}

export {
    getChildren,
    postChildren,
    updateChildren,
    deleteChildren
};
