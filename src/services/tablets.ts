'use strict';

import { QueryTypes } from 'sequelize';
import { Tablets } from '../data/models/tablets';

class TabletsService {
  async getAll(quantity?: string ) {
    let tablets;
    
    if (quantity === undefined) {
      tablets = await Tablets.findAll();
    }

    if (typeof quantity === 'string') {
      tablets = await Tablets.findAll();

      return tablets.length;
    }

    return tablets;
  }
}

export const tabletsService = new TabletsService();
