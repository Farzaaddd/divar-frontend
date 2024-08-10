import api from "configs/api.js";

const getProfile = () => api.get("/user/whoami").then((res) => res || false);

const GetPosts = () => api.get("post/my");

const GetAllPosts = () => api.get("");
export { getProfile, GetPosts, GetAllPosts };
