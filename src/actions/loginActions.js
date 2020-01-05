export function login(username) {
  return { type: "LOGIN", payload: username };
}
export function logout() {
  return { type: "LOGOUT" };
}
