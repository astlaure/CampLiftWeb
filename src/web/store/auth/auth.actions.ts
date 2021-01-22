export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const login = (payload: any) => {
  return {
    type: LOGIN,
    payload,
  };
};

export default {
  login,
};
