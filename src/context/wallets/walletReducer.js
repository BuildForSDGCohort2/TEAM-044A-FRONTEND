import {
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  LOAD_BALANCE,
  WALLET_HISTORY,
  CLEAR_FIELDS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    // CHECK HERE!!====
    case DEPOSIT_MONEY:
      return {
        balance: action.payload[0].deposit.amount,
        transactions: [action.payload, ...state.transactions],
        error: null,
      };
    case WITHDRAW_MONEY: {
      return {
        ...state,
        balance: action.payload,
        error: null,
      };
    }
    case TRANSFER_MONEY: {
      return {
        ...state,
        error: null,
      };
    }

    case LOAD_BALANCE: {
      return {
        ...state,
        loading: false,
        balance: action.payload,
      };
    }

    case WALLET_HISTORY: {
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };
    }

    case CLEAR_FIELDS: {
      return {
        ...state,
        field: null,
      };
    }

    default:
      return state;
  }
};
