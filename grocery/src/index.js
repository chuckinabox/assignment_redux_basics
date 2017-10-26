import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { cartApp } from "./reducers";

import {
  addItem,
  purchaseItem,
  setPurchasedFilter,
  setCategoryFilter,
  sortName,
  sortDescription
} from "./actions";

let shoppingCart = createStore(cartApp);

let unsubscribe = shoppingCart.subscribe(() => {
  console.log(shoppingCart.getState());
});

console.log("initial state", shoppingCart.getState());

shoppingCart.dispatch(
  addItem({
    name: "Jelly",
    description: "Purple",
    amount: "2.99",
    category: "Food"
  })
);

shoppingCart.dispatch(
  addItem({
    name: "Plates",
    description: "Paper",
    amount: "3.99",
    category: "Paper"
  })
);

shoppingCart.dispatch(
  addItem({
    name: "Lettuce",
    description: "Crisp",
    amount: "1.99",
    category: "Food"
  })
);

shoppingCart.dispatch(purchaseItem(3));

shoppingCart.dispatch(setCategoryFilter("SHOW_FOOD"));

shoppingCart.dispatch(setPurchasedFilter("SHOW_UNPURCHASED"));

shoppingCart.dispatch(sortName("ASC"));

shoppingCart.dispatch(sortDescription("DESC"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
