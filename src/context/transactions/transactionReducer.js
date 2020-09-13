import {
  ADD_TRANSACTION,
  GET_TRANSACTION,
  LOAD_TRANSACTIONS,
  CLEAR_FIELDS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: null,
      };
    case GET_TRANSACTION:
      return {
        ...state,
        current: action.payload,
        loading: null,
      };
    case LOAD_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: null,
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
