import { combineReducers } from "redux";

import {
  CREATE_ACCOUNT,
  VIEW_ACCOUNT,
  WITHDRAW,
  DEPOSIT,
  TRANSFER,
  TRANSACTION_FILTER_DATE
} from "./actions";

function bank(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case WITHDRAW:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance - action.data.amount
          };
        }
        return account;
      });
    case DEPOSIT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance + action.data.amount
          };
        }
        return account;
      });
    case TRANSFER:
      return state.map(account => {
        if (account.id === action.data.id1) {
          return {
            ...account,
            balance: account.balance - action.data.amount
          };
        } else if (account.id === action.data.id2) {
          return {
            ...account,
            balance: account.balance + action.data.amount
          };
        }
        return account;
      });
    default:
      return state;
  }
}

function transactionFilter(state = { from: Date(), to: Date() }, action) {
  switch (action.type) {
    case TRANSACTION_FILTER_DATE:
      return action.data;
    default:
      return state;
  }
}

function accountView(state = 0, action) {
  switch (action.type) {
    case VIEW_ACCOUNT:
      return action.data;
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  bank,
  transactionFilter,
  accountView
});
