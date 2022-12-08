'use strict';

import { Tablets } from '../data/models/tablets';

class TabletsService {
  async getAll() {
    const tablets = await Tablets.findAll();

    return tablets;
  }
}

export const tabletsService = new TabletsService();
