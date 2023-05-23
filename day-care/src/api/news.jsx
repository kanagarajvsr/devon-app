import axios from './../utils/axios.js';

//CURD operations for NEWS.
function getNews() {
    return axios.get('/news'); 
}
function postNews(data) {
    return axios.post('/news',data);
}
function updateNews(id,data) {
    return axios.put(`/news${id}`,data);
}
function deleteNews(id) {
    return axios.get(`/news${id}`);
}

export {
    getNews,
    postNews,
    updateNews,
    deleteNews
};
