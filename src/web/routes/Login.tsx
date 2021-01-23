import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useHttpClient from '../hooks/useHttpClient';
import authActions from '../store/auth/auth.actions';

const Login: React.FC = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const httpClient = useHttpClient();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    httpClient.post('/api/security/authenticate', state)
      .then((user) => {
        dispatch(authActions.login(user));
        history.push('/');
      })
      .catch(() => {});
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={state.password} onChange={handleChange} />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
