import { ADD_DISPUTE, LOAD_DISPUTES, GET_DISPUTE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_DISPUTE:
      return {
        ...state,
        disputes: [action.payload, ...state.disputes],
        loading: null,
      };

    case GET_DISPUTE:
      return {
        ...state,
        current: action.payload,
        loading: null,
      };
    case LOAD_DISPUTES:
      return {
        ...state,
        disputes: action.payload,
        loading: null,
      };
    default:
      return state;
  }
};
