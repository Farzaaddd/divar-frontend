import api from "configs/api";

const getCategory = () => api.get("/category");

const addCategory = (data) => api.post("/category", data);

const deleteCategory = (id) => api.delete(`/category/${id}`);

const postDetail = () => api.get(`/`);

export { getCategory, addCategory, deleteCategory, postDetail };
