'use strict';

import { Request, Response } from "express";
import { phonesDescriptionService } from "../services/phoneDescriptions";

class PhonesDescriptionController {
  async postDescription(req: Request, res: Response) {
    const user = await phonesDescriptionService.createDescription(req.body);

    res.statusCode = 201;
    res.json(user);
  }

  async getDescriptions(req: Request, res: Response) {
    const phones = await phonesDescriptionService.getAll();

    res.statusCode = 200;
    res.json(phones);
  };

  async getDescription(req: Request, res: Response) {
    const { phoneId } = req.params;

    const phone = await phonesDescriptionService.getOne(phoneId);

    if (!phone) {
      res.statusCode = 404;

      return;
    }

    res.statusCode = 200;
    res.json(phone);
  };
}

export const phonesDescriptionController = new PhonesDescriptionController();
