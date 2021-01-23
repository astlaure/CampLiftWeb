export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const login = (payload: any) => {
  return {
    type: LOGIN,
    payload,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

export default {
  login,
  logout,
};
