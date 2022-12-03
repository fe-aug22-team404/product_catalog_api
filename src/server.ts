import express from 'express';
import cors from 'cors';
import { phonesController } from './controllers/phone';
import { phonesDescriptionController } from './controllers/phoneDescription';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/server/phones', router);

router.get('/:phoneId', phonesDescriptionController.getDescription);
router.get('/', phonesController.getPhones);

app.listen(port, () => {
  PhoneData.sync();
  PhoneDescription.sync();
  console.log('server started ', port);
});
