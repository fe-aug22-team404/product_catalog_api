'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const PhoneDescription = sequelize.define('PhoneDescription', {
  id: {
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  colorsAvailable: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  description: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resolution: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  processor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  camera: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zoom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cell: {
    type: DataTypes.JSON,
    allowNull: false,
  },
},
  {
    tableName: 'PhoneDescriptions',
  }
);
