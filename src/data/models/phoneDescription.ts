'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const PhoneDescription = sequelize.define('PhoneDescription', {
	id: {
    field: 'id',
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
    autoIncrement: false,
	},
  namespaceId: {
    field: 'namespaceId',
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    field: 'name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacityAvailable: {
    field: 'capacityAvailable',
    type: DataTypes.JSON,
    allowNull: false,
  },
  capacity: {
    field: 'capacity',
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceRegular: {
    field: 'priceRegular',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
	priceDiscount: {
    field: 'priceDiscount',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
	colorsAvailable: {
    field: 'colorsAvailable',
    type: DataTypes.JSON,
    allowNull: false,
  },
	color: {
    field: 'color',
    type: DataTypes.STRING,
    allowNull: false,
  },
	images: {
    field: 'images',
    type: DataTypes.JSON,
    allowNull: false,
  },
	description: {
    field: 'description',
    type: DataTypes.JSON,
    allowNull: false,
  },
	screen: {
    field: 'screen',
    type: DataTypes.STRING,
    allowNull: false,
  },
	resolution: {
    field: 'resolution',
    type: DataTypes.STRING,
    allowNull: false,
  },
	processor: {
    field: 'processor',
    type: DataTypes.STRING,
    allowNull: false,
  },
	ram: {
    field: 'ram',
    type: DataTypes.STRING,
    allowNull: false,
  },
	camera: {
    field: 'camera',
    type: DataTypes.STRING,
    allowNull: false,
  },
	zoom: {
    field: 'zoom',
    type: DataTypes.STRING,
    allowNull: false,
  },
	cell: {
    field: 'cell',
    type: DataTypes.JSON,
    allowNull: false,
  },
},
	{
		tableName: 'PhoneDescriptions',
	}
);
