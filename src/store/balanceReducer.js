const initState = {
  balance: 0,
  loading: false
};

export default function balanceReducer(state = initState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload, loading: false };
    case "WITHDRAW":
      return { balance: state.balance - action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
