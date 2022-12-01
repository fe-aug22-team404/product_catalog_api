'use strict';

import { Request, Response } from "express";

const { phonesService } = require('../services/phones');

class PhonesController {
  async postPhone(req: Request, res: Response) {
    const user = await phonesService.createPhone(req.body);

    res.statusCode = 201;
    res.json(user);
  }

  async getPhones(req: Request, res: Response) {
    const { ids } = req.body || null;
    
    const phones = await phonesService.getAll(ids);

    res.statusCode = 200;
    res.json(phones);
  };
}

export const phonesController = new PhonesController();
