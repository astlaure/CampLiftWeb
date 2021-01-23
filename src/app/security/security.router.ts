import express from 'express';
import Logger from '../core/logger';
import bcryptUtil from './bcrypt/bcrypt.util';
import jwtUtil from './jwt/jwt.util';
import security from './security';
import User from './users/user.model';

const securityRouter = express.Router();
const localMiddleware = security.authenticate('local', { session: false });
const jwtMiddleware = security.authenticate('jwt', { session: false });

/**
 * Return if the user is authenticated and the username of this user.
 */
securityRouter.get('/userinfo', jwtMiddleware, (req, res) => {
  const { email } = req.user as User;
  return res.status(200).json({
    email,
  });
});

/**
 * Authenticate with username/password (Lift Account)
 */
securityRouter.post('/authenticate', localMiddleware, async (req, res) => {
  // create token
  // send web by cookies
  // send mobile in body
  const user = req.user! as User;
  const token = await jwtUtil.sign({
    id: user.id,
    email: user.email,
    role: '',
  });
  const parts = token.split('.');
  res.cookie('jwt-session', `${parts[0]}.${parts[1]}`, { httpOnly: true });
  res.cookie('XSRF-TOKEN', parts[2], { httpOnly: false });
  return res.status(200).json({
    email: user.email,
  });
});

/**
 * Register a new Lift Account
 */
securityRouter.post('/register', async (req, res) => {
  try {
    const data = {
      ...req.body,
      password: await bcryptUtil.hash(req.body.password),
    };
    await User.create(data);
    return res.sendStatus(201);
  } catch (err) {
    Logger.error(err);
    return res.sendStatus(400);
  }
});

export default securityRouter;
