import { Action } from 'redux';
import { LOGIN, LOGOUT } from './auth.actions';

export interface AuthState {
  authenticated: boolean;
  email: string;
}

interface AuthAction extends Action {
  payload: any;
}

const INITIAL_STATE: AuthState = {
  authenticated: false,
  email: '',
};

const authReducer = (state = INITIAL_STATE, action: AuthAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        authenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
