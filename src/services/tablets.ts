'use strict';

import { QueryTypes } from 'sequelize';
import { Tablets } from '../data/models/tablets';

class TabletsService {
  async getAll(
    quantity?: string,
    query?: string
  ) {
    let tablets;
    
    if (quantity === undefined && query === undefined) {
      tablets = await Tablets.findAll();
    }

    if (typeof quantity === 'string') {
      tablets = await Tablets.findAll();

      return tablets.length;
    }

    if (typeof query === 'string') {
      const options = query.split(',');

      tablets = await Tablets.findAll({
        where: {
          'itemId': options,
        }
      });
    }

    return tablets;
  }
}

export const tabletsService = new TabletsService();
