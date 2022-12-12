import express from 'express';
import cors from 'cors';
import { phonesController } from './controllers/phone';
import { phonesDescriptionController } from './controllers/phoneDescription';
import serverless from 'serverless-http';
import { tabletsController } from './controllers/tablets';
const path = require('path');

const app = express();
const router = express.Router();
const tabletsRouter = express.Router();

app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/server/phones', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/:phoneId', phonesDescriptionController.getDescription);
router.get('/', phonesController.getPhones);

app.use('/.netlify/functions/server/tablets', tabletsRouter)

tabletsRouter.get('/', tabletsController.getTablets);

app.listen(port, () => {
  PhoneData.sync();
  PhoneDescription.sync();
  console.log('server started ', port);
});
