export function loading() {
  return { type: "LOADING" };
}

export function deposit(num) {
  return { type: "DEPOSIT", payload: num };
}
export function withdraw(num) {
  return { type: "WITHDRAW", payload: num };
}

export function depositAsync(num) {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit(num));
    }, 1000);
  };
}

export function withdrawAsync(num) {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw(num));
    }, 1000);
  };
}
