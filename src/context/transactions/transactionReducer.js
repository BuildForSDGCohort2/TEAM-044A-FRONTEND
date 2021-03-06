import {
  GET_TRANSACTION,
  LOAD_TRANSACTIONS,
  CLEAR_FIELDS,
  TRANSACTION_ERROR,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
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
        loading: false,
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        current: null,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
