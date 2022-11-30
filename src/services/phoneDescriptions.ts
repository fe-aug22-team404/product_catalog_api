'use strict';

import { PhoneDescription } from '../data/models/phoneDescription';
import { PhoneDescr } from '../types/PhoneDescr';

class PhonesDescriptionService {
  async createDescription(data: PhoneDescr) {
    const phone = await PhoneDescription.create({ ...data });

    return phone;
  }

  async getAll() {
    const phones = await PhoneDescription.findAll();

    return phones;
  }

  async getOne(id: string) {
    const phone = await PhoneDescription.findByPk(id);

    return phone;
  }
}

export const phonesDescriptionService = new PhonesDescriptionService();
