import passport from 'passport';
import LocalStrategy from './local/local.strategy';
import JwtStrategy from './jwt/jwt.strategy';

passport.use(LocalStrategy);
passport.use(JwtStrategy);

const security = passport;
export default security;
