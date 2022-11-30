'use strict';

import { Phone } from '../types/Phone';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async createPhone(data: Phone) {
    const phone = await PhoneData.create({ ...data });

    return phone;
  }

  async getAll() {
    const phones = await PhoneData.findAll();

    return phones;
  }

  async getOne(id: number) {
    const phone = await PhoneData.findByPk(id);

    return phone;
  }
}

export const phonesService = new PhonesService();
