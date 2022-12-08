'use strict';

import { Request, Response } from "express";
import { tabletsService } from "src/services/tablets";

class TabletsController {
  async getTablets(req: Request, res: Response) {
    const tablets = await tabletsService.getAll();
    
    res.statusCode = 200;
    res.json(tablets);
  };
}

export const tabletsController = new TabletsController();
