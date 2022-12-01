'use strict';
import { Op } from 'sequelize';
import { Phone } from '../types/Phone';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async createPhone(data: Phone) {
    const phone = await PhoneData.create({ ...data });

    return phone;
  }

  async getAll(ids: number[] | null) {
    let phones;

    if (!ids) {
      phones = await PhoneData.findAll();
    } else {
      phones = await PhoneData.findAll({
        where: {
          'id': {
            [Op.or]: ids,
          }
        }
      });
    }

    return phones;
  }

}

export const phonesService = new PhonesService();
