'use strict';

import { Request, Response } from "express";
import { phonesDescriptionService } from "../services/phoneDescriptions";

class PhonesDescriptionController {
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
