import axios from "axios";

axios.defaults.baseURL = "http://localhost:8086/contacts";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAllContact = axios.get();

export const postContact = (obj) => axios.post("", obj);

export const deleteContact = (id) => axios.delete(id);
