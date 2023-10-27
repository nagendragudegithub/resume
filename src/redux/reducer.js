import { API_DATA, API_ERROR } from "./constant";

const initialValue = {
  data: [],
  error: false,
};

const SelfDetails = (state = initialValue, action) => {
  switch (action.type) {
    case API_DATA:
      return {
        ...state,
        data: action,
        error: false,
      };

    case API_ERROR:
      return {
        ...state,
        data: action,
        error: true,
      };

    default:
      return state;
  }
};

export default SelfDetails;
