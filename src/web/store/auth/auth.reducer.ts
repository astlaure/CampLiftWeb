import { Action } from 'redux';
import { LOGIN, LOGOUT } from './auth.actions';

const INITIAL_STATE = {
  authenticated: false,
  username: '',
  role: '',
};

const authReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
