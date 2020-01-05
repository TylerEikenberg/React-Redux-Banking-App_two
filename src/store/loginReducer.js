const initState = {
  loggedIn: false,
  username: null
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true, username: action.payload };
    case "LOGOUT":
      return { loggedIn: false, username: null };
    default:
      return state;
  }
}
