const initState = {
  loggedIn: false
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true };
    case "LOGOUT":
      return { loggedIn: false };
    default:
      return state;
  }
}
