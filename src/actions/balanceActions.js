export function loading() {
  return { type: loading };
}

export function deposit() {
  return { type: "DEPOSIT", payload: 10 };
}

export function depositAsync() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 1000);
  };
}
