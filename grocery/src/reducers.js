import { combineReducers } from "redux";

//Import action types
import {
  ADD_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SORT_NAME,
  SORT_DESCRIPTION
} from "./actions";

function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    default:
      return state;
  }
}

function cartFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
}

function cartSort(state = "FILO", action) {
  switch (action.type) {
    case SORT_NAME:
      return "NAME_" + action.data;
    case SORT_DESCRIPTION:
      return "DESCRIPTION_" + action.data;
    default:
      return state;
  }
}

export const cartApp = combineReducers({
  cart,
  cartFilters,
  cartSort
});
