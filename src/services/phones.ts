'use strict';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll(favourites?: string, orderType?: string) {
    let phones;
    
    if (favourites === undefined && orderType === undefined) {
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

    if (typeof orderType === 'string') {
      phones = await PhoneData.findAll({
        order: [
          [orderType, 'DESC'],
        ]
      });
    }

    return phones;
  }
}

export const phonesService = new PhonesService();
