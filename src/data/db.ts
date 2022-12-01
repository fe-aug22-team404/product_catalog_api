import * as pg from 'pg';
import { Sequelize } from 'sequelize';

// eslint-disable-next-line max-len
export const sequelize = new Sequelize('postgresql://postgres:10TdRj8WVrwmRIQDL6aD@containers-us-west-96.railway.app:6091/railway');

// export const sequelize = new Sequelize('postgres', 'postgres', 'test1234', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
