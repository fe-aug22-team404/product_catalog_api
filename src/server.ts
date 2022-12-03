import express from 'express';
import cors from 'cors';
import { phonesController } from './controllers/phone';
import { phonesDescriptionController } from './controllers/phoneDescription';

const port = process.env.PORT || 8080;
const app = express();
const phonesRouter = express.Router();
const phoneDescriptionRouter = express.Router();

app.use(cors());
app.use(express.json());

app.use('/phones', phonesRouter, phoneDescriptionRouter);

phoneDescriptionRouter.get('/:phoneId', phonesDescriptionController.getDescription);
phonesRouter.get('/', phonesController.getPhones);

app.listen(port, () => {
  console.log('server started ', port);
});
