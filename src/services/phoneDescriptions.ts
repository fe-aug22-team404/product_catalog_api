'use strict';

import { PhoneDescription } from '../data/models/phoneDescription';
import { PhoneDescr } from '../types/PhoneDescr';

class PhonesDescriptionService {
  async getOne(id: string) {
    const phone = await PhoneDescription.findByPk(id);

    return phone;
  }
}

export const phonesDescriptionService = new PhonesDescriptionService();
