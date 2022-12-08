'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhones(req: Request, res: Response) {
    const { query, orderType, quantity } = req.query;
    const phones = await phonesService.getAll(query, orderType, quantity);

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
