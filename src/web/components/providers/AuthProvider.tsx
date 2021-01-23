import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useHttpClient from '../../hooks/useHttpClient';
import Spinner from '../Spinner';
import AuthActions from '../../store/auth/auth.actions';

const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const httpClient = useHttpClient();
  const dispatch = useDispatch();

  useEffect(() => {
    httpClient.get('/api/security/userinfo')
      .then((user) => {
        dispatch(AuthActions.login(user));
      })
      .catch(() => {})
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      { loading ? <Spinner /> : children }
    </>
  );
};

export default AuthProvider;
