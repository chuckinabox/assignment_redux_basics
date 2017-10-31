export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const WITHDRAW = "WITHDRAW";
export const DEPOSIT = "DEPOSIT";
export const TRANSFER = "TRANSFER";
export const TRANSACTION_FILTER_DATE = "TRANSACTION_FILTER_DATE";

let nextAccountId = 1000;
export function addAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
}

export function viewAccount(id) {
  return {
    type: VIEW_ACCOUNT,
    data: { id }
  };
}

export function withdraw(data) {
  return {
    type: WITHDRAW,
    data: {
      id: data.id,
      amount: data.amount
    }
  };
}

export function deposit(data) {
  return {
    type: DEPOSIT,
    data: {
      id: data.id,
      amount: data.amount
    }
  };
}
export function transfer(data) {
  return {
    type: TRANSFER,
    data: {
      id1: data.id1,
      id2: data.id2,
      amount: data.amount
    }
  };
}
export function setTransactionFilter(data) {
  return {
    type: TRANSACTION_FILTER_DATE,
    data: {
      from: data.from,
      to: data.to
    }
  };
}
