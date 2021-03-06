import { Strategy } from 'passport-jwt';
import config from '../../core/config';

const JwtStrategy = new Strategy({
  algorithms: ['HS256'],
  secretOrKey: config.secret,
  jwtFromRequest: (req) => {
    // Mobile
    const { authorization, 'x-xsrf-token': xsrfToken } = req.headers;
    if (authorization && authorization.startsWith('Bearer: ')) {
      return authorization.replace('Bearer: ', '');
    }

    // Web
    return `${req.cookies['jwt-session']}.${xsrfToken}` || null;
  },
}, (payload, done) => {
  // Payload is a semi user
  done(null, payload);
});

export default JwtStrategy;
