'use strict';
import { Op } from 'sequelize';
import { Phone } from '../types/Phone';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll() {
    const phones = await PhoneData.findAll();

    return phones;
  }
}

export const phonesService = new PhonesService();
