import { Strategy } from 'passport-local';
import bcryptUtil from '../bcrypt/bcrypt.util';
import User from '../users/user.model';

const LocalStrategy = new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return done(null, false);
    }

    if (!await bcryptUtil.compare(password, user.password)) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default LocalStrategy;
