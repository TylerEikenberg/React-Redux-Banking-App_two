const initialState = {
  loan: false
};

export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true };
    default:
      return state;
  }
}
