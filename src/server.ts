import express from 'express';
import cors from 'cors';
import { phonesController } from './controllers/phone';
import { phonesDescriptionController } from './controllers/phoneDescription';
import serverless from 'serverless-http';
import { tabletsController } from './controllers/tablets';
import { description } from './public/index';

const app = express();
const router = express.Router();
const tabletsRouter = express.Router();

app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/server/phones', router);

app.get('/.netlify/functions/server', (req, res) => {
  res.send(description);
});

router.get('/:phoneId', phonesDescriptionController.getDescription);
router.get('/', phonesController.getPhones);

app.use('/.netlify/functions/server/tablets', tabletsRouter)

tabletsRouter.get('/', tabletsController.getTablets);

export const handler = serverless(app);