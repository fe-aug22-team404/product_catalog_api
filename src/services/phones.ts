'use strict';
import { PhoneData } from '../data/models/phones';

class PhonesService {
  async getAll() {
    const phones = await PhoneData.findAll();

    return phones;
  }
}

export const phonesService = new PhonesService();
