import bcrypt from 'bcrypt';

const hash = async (password: string) => {
  return bcrypt.hash(password, 10);
};

const compare = async (password: string, encrypted: string) => {
  return bcrypt.compare(password, encrypted);
};

export default {
  hash,
  compare,
};
