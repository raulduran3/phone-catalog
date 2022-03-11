import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPhones = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPhones();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPhone = (phone, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.createPhone(phone);

    dispatch({ type: CREATE, payload: data });
    setLoading(false);
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export const updatePhone = (id, phone, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.updatePhone(id, phone);

    dispatch({ type: UPDATE, payload: data });
    setLoading(false);
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export const deletePhone = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    await api.deletePhone(id);

    dispatch({ type: DELETE, payload: id });
    setLoading(false);
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};
