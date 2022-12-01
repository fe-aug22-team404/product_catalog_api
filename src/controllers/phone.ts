'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhonesById(req: Request, res: Response) {
    const phones = await phonesService.getCart(req.body);

    res.statusCode = 200;
    res.json(phones);
  }

  async getPhones(req: Request, res: Response) {
    const { ids } = req.body;
    
    const phones = await phonesService.getAll(ids);

    res.statusCode = 200;
    res.json(ids);
  };
}

export const phonesController = new PhonesController();
