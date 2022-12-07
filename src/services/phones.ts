'use strict';
import { Sequelize } from 'sequelize';
import { sequelize } from 'src/data/db';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll(query?: string, orderType?: string) {
    let phones;
    
    if (query === undefined && orderType === undefined) {
      phones = await PhoneData.findAll();
    } 

    if (typeof query === 'string') {
      const options = query.split(',');

      phones = await PhoneData.findAll({
        where: {
          'phoneId': options,
        }
      });
    }

    if (typeof orderType === 'string' && orderType !== 'random') {
      phones = await PhoneData.findAll({
        order: [
          [orderType, 'DESC'],
        ]
      });
    }

    if (typeof orderType === 'string' && orderType === 'random') {
      phones = await PhoneData.findAll({
        order:  sequelize.random()
      });
    }

    return phones;
  }
}

export const phonesService = new PhonesService();
