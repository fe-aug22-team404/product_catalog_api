'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhonesById(req: Request, res: Response) {
    const { ids } = req.body;

    const phones = await phonesService.getCart(ids);

    res.statusCode = 200;
    res.json(phones);
    res.json(req.body);
  }

  async getPhones(req: Request, res: Response) {
    const phones = await phonesService.getAll();

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
