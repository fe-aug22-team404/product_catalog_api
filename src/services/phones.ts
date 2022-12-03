'use strict';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll(favourites: string | undefined) {
    let phones;
    
    if (favourites === undefined) {
      phones = await PhoneData.findAll();
    } 

    if (typeof favourites === 'string') {
      const options = favourites.split(',').map(option => +option);

      phones = await PhoneData.findAll({
        where: {
          'id': options,
        }
      });
    }

    return phones;
  }
}

export const phonesService = new PhonesService();
