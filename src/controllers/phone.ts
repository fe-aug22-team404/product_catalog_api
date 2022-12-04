'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async getPhones(req: Request, res: Response) {
    const { favourites, orderType } = req.query;
    const phones = await phonesService.getAll(favourites, orderType);

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
