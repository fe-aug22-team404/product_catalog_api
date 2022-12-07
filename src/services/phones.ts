'use strict';

import { shuffle } from '../utils/_shuffle';
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
      phones = await PhoneData.findAll();
      phones = shuffle(phones);
    }

    return phones;
  }
}

export const phonesService = new PhonesService();
