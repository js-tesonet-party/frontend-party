import types from "../actions/types";
import fetchAuth from "../services/auth/auth";

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
});

export const loginSuccessful = token => ({
  type: types.LOGIN_SUCCESSFUL,
  token
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED
});

export const logout = () => ({
  type: types.LOGOUT
});

export const onLogin = user => async dispatch => {
  dispatch(loginRequested());
  try {
    const { token } = await fetchAuth(user);
    localStorage.setItem("token", token);
    dispatch(loginSuccessful(token));
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const onLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logout());
};
