import axios from "axios";

export const url = "http://localhost:5000/phones";

export const fetchPhones = () => axios.get(url);
export const createPhone = (newPhone) => axios.post(url, newPhone);
export const updatePhone = (id, updatedPhone) =>
  axios.patch(`${url}/${id}`, updatedPhone);
export const deletePhone = (id) => axios.delete(`${url}/${id}`);
