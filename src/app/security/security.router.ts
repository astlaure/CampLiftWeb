import express from 'express';
import Logger from '../core/logger';
import bcryptUtil from './bcrypt/bcrypt.util';
import jwtUtil from './jwt/jwt.util';
import passport from './security';
import User from './users/user.model';

const securityRouter = express.Router();
const localMiddleware = passport.authenticate('local', { session: false });

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
    username: user.username,
    role: '',
  });
  return res.status(200).json({
    token,
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
