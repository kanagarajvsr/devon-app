import callToBackend from './../utils/axios.js';

//CURD operations for NEWS.
function getNews() {
    return callToBackend('/news',"GET"); 
}
function postNews(data) {
    return callToBackend('/news',"POST",{data});
}
function updateNews(id,data) {
    return callToBackend(`/news${id}`,"PUT",{data});
}
function deleteNews(id) {
    return callToBackend(`/news${id}`,"DELETE");
}

export {
    getNews,
    postNews,
    updateNews,
    deleteNews
};
