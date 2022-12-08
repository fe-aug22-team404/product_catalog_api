'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const PhoneData = sequelize.define('Phone', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
  },
  category: {
    field: 'category',
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneId: {
    field: 'phoneId',
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemId: {
    field: 'itemId',
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    field: 'name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullPrice: {
    field: 'fullPrice',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    field: 'price',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  screen: {
    field: 'screen',
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    field: 'capacity',
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    field: 'color',
    type: DataTypes.STRING,
    allowNull: false,
  },
  ram: {
    field: 'ram',
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    field: 'year',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    field: 'image',
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Phones',
});