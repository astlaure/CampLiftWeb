import React, { useState } from 'react';
import useHttpClient from '../hooks/useHttpClient';

const Register: React.FC = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmation: '',
  });

  const httpClient = useHttpClient();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    httpClient.post('/api/security/register', state)
      .then(() => {})
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
      <h1>Register</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={state.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="confirmation">Password Confirmation</label>
          <input type="password" name="confirmation" id="confirmation" value={state.confirmation} onChange={handleChange} />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
