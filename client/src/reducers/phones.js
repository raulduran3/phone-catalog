import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
const phones = (phones = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...phones, action.payload];
    case UPDATE:
      return phones.map((phone) =>
        phone._id === action.payload._id ? action.payload : phone
      );
    case DELETE:
      return phones.filter((phone) => phone._id !== action.payload);
    default:
      return phones;
  }
};

export default phones;
