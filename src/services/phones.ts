'use strict';
import { sequelize } from 'src/data/db';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll(favourites: string | undefined, order: string | undefined) {
    let phones;
    
    if (favourites === undefined) {
      phones = await PhoneData.findAll();
    } 

    if (typeof favourites === 'string') {
      const options = favourites.split(',');

      phones = await PhoneData.findAll({
        where: {
          'phoneId': options,
        }
      });
    }

    if (typeof order === 'string') {
      phones = await PhoneData.findAll({
        order: [
          'year', 'DESC'
        ]
      });
    }

    return phones;
  }
}

export const phonesService = new PhonesService();
