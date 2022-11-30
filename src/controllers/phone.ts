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
    const phones = await phonesService.getAll();

    res.statusCode = 200;
    res.json(phones);
  };

  async getPhone(req: Request, res: Response) {
    const { phoneId } = req.params;

    const phone = await phonesService.getOne(+phoneId);

    if (!phone) {
      res.statusCode = 404;

      return;
    }

    res.statusCode = 200;
    res.json(phone);
  };
}

export const phonesController = new PhonesController();
