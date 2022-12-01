'use strict';
import { Op } from 'sequelize';
import { Phone } from '../types/Phone';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll() {
    const phones = await PhoneData.findAll();

    return phones;
  }

  async getCart(ids: number[]) {
    const phones = await PhoneData.findAll({
        where: {
          'id': {
            [Op.in]: ids,
          }
        }
    });

    return phones;
  }
}

export const phonesService = new PhonesService();
