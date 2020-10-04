import {
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  LOAD_BALANCE,
  WALLET_HISTORY,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case DEPOSIT_MONEY:
      return {
        balance: action.payload,
        // transactions: [...state.transactions, action.payload],
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

    default:
      return state;
  }
};
