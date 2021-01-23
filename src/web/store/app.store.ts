import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import authReducer, { AuthState } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

const reducers = combineReducers({
  auth: authReducer,
});

const store = createStore(reducers, devToolsEnhancer({}));

export default store;
