import express from 'express';
// import pg from 'pg';
import cors from 'cors';
// import serverless from 'serverless-http';
import { phonesController } from './controllers/phone';
import { PhoneData } from './data/models/phones';
import { phonesDescriptionController } from './controllers/phoneDescription';
import { PhoneDescription } from './data/models/phoneDescription';

const port = process.env.PORT || 8080;
const app = express();
const phonesRouter = express.Router();
const phoneDescriptionRouter = express.Router();

app.use(cors());
app.use(express.json());
app.use('/phones', phonesRouter);
app.use('/phonedescription', phoneDescriptionRouter);

phonesRouter.get('/', phonesController.getPhones);
phonesRouter.post('/', phonesController.postPhone);

phoneDescriptionRouter.get('/', phonesDescriptionController.getDescriptions);
phoneDescriptionRouter.post('/', phonesDescriptionController.postDescription);

PhoneData.sync();
PhoneDescription.sync();

app.listen(port, () => {
  console.log('server started ', port);
});
// app.use('/.netlify/functions/server', phonesRouter);

// export const handler = serverless(app);