import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { bankApp } from "./reducers";

import {
  addAccount,
  viewAccount,
  withdraw,
  deposit,
  transfer,
  setTransactionFilter
} from "./actions";

let bank = createStore(bankApp);

let unsubscribe = bank.subscribe(() => {
  console.log(bank.getState());
});

console.log("initial state", bank.getState());

bank.dispatch(
  addAccount({
    balance: 10
  })
);

bank.dispatch(
  addAccount({
    balance: 30
  })
);

bank.dispatch(
  deposit({
    id: 1000,
    amount: 500
  })
);

bank.dispatch(
  withdraw({
    id: 1000,
    amount: 250
  })
);

bank.dispatch(
  viewAccount({
    id: 1000
  })
);

bank.dispatch(
  transfer({
    id1: 1000,
    id2: 1001,
    amount: 25
  })
);

bank.dispatch(
  setTransactionFilter({
    from: "10/12/17",
    to: "10/30/17"
  })
);

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
