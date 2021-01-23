import jwt from 'jsonwebtoken';
import config from '../../core/config';

interface JwtClaims {
  id: number;
  email: string;
  role: string;
}

const sign = async (claims: JwtClaims): Promise<String> => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(claims, config.secret, { algorithm: 'HS256' });
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};

const validate = async (token: string): Promise<JwtClaims> => {
  return new Promise((resolve, reject) => {
    try {
      const claims = jwt.verify(token, config.secret, { algorithms: ['HS256'] });
      resolve(claims as JwtClaims);
    } catch (err) {
      reject(err);
    }
  });
};

export default {
  sign,
  validate,
};
