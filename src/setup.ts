import { PhoneDescription } from "./data/models/phoneDescription";
import { PhoneData } from "./data/models/phones";
import { Phone } from "./types/Phone";
import { PhoneDescr } from "./types/PhoneDescription";

const phones = require('../source/phones.json');
const phoneDescription = require('../source/PhonesDescriptions.json');

(async() => {
  await PhoneData.sync({ force: true });
  await PhoneDescription.sync({ force: true });

  Promise.all(phones.map((phone: Phone) => (
    PhoneData.create({ ...phone })
  )))
  Promise.all(phoneDescription.map((phone: PhoneDescr) => (
    PhoneDescription.create({ ...phone })
  )))
})();