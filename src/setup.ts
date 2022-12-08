import { PhoneDescription } from "./data/models/phoneDescription";
import { PhoneData } from "./data/models/phones";
import { Tablets } from "./data/models/tablets";
import { Phone } from "./types/Phone";
import { PhoneDescr } from "./types/PhoneDescription";
import { Tablet } from "./types/Tablet";

const phones = require('../source/phones.json');
const phoneDescription = require('../source/PhonesDescriptions.json');
const tablets = require('../source/tablets.json');

(async() => {
  await PhoneData.sync({ force: true });
  await PhoneDescription.sync({ force: true });
  await Tablets.sync({ force: true });

  Promise.all(phones.map((phone: Phone) => (
    PhoneData.create({ ...phone })
  )));
  Promise.all(phoneDescription.map((phone: PhoneDescr) => (
    PhoneDescription.create({ ...phone })
  )));
  Promise.all(tablets.map((tablet: Tablet) => (
    Tablets.create({ ...tablet })
  )));

})();