'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const Tablets = sequelize.define('Tablet', {
	id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
	itemId: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	category: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	imageUrl: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	snippet: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	fullPrice: {
		type: DataTypes.INTEGER,
    allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
    allowNull: false,
	},
	screen: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	capacity: {
		type: DataTypes.STRING,
    allowNull: false,
	},
	ram: {
		type: DataTypes.STRING,
    allowNull: false,
	},
},
	{
		tableName: 'Tablets',
	}
);