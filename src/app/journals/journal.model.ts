import { DataTypes, Model } from 'sequelize';
import database from '../database/database';

class Journal extends Model {
  id!: number;
  username!: string;
  password!: string;
}

Journal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
}, {
  sequelize: database,
  tableName: 'journals',
});

export default Journal;
