'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhones(req: Request, res: Response) {
    const { favourites } = req.query;
    const phones = await phonesService.getAll(favourites);

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
