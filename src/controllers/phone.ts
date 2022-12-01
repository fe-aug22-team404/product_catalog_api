'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhones(req: Request, res: Response) {
    const phones = await phonesService.getAll();

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
