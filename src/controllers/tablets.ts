'use strict';

import { Request, Response } from "express";
const { tabletsService } = require('../services/tablets');

class TabletsController {
  async getTablets(req: Request, res: Response) {
    const { quantity, query } = req.query;
    const tablets = await tabletsService.getAll(quantity, query);
    
    res.statusCode = 200;
    res.json(tablets);
  };
}

export const tabletsController = new TabletsController();
