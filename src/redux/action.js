import { API_DATA, DATA_REQUEST, API_ERROR } from "./constant";

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

export const apiData = (data) => {
  console.log("🚀 ~ file: action.js:12 ~ apiData ~ data:", data);

  return {
    type: API_DATA,
    payload: data,
  };
};

export const apiError = (data) => {
  return {
    type: API_ERROR,
    payload: data,
  };
};
