import { DataTypes, Model } from 'sequelize';
import database from '../../database/database';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  enabled!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notNull: true,
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: database,
  tableName: 'users',
});

export default User;
