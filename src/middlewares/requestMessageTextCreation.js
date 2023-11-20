const getSectionLabel = require("../utilities/getSectionLabel");
const clearPhoneNumber = require("../utilities/clearPhoneNumber");
const getDateString = require("../utilities/getDateString");
const getAgeString = require("../utilities/getAgeString");

const requestMessageTextCreation = (req, res, next) => {
  const {
    body: {
      section,
      name,
      surename,
      phone,
      birthdate,
      height,
      weight,
      medical,
    },
  } = req;

  const sectioLabel = getSectionLabel(section);
  const cleanPhoneNumber = clearPhoneNumber(phone);
  const dateString = getDateString(birthdate);
  const ageString = getAgeString(birthdate);

  req.requestText = `<b>Новий запит до секції  "${sectioLabel}"</b>
    \n<i> - Ім'я:</i>  <b>${name} ${surename}</b>\n<i> - Телефон:</i>  <a href="tel:${cleanPhoneNumber}">${cleanPhoneNumber}</a>
    \n<i> - Дата народження:</i>  <b>${dateString}</b>\n<i> - Вік:</i>  <b>${ageString}</b>
    \n<i> - Зріст:</i>  <b>${height} см.</b>\n<i> - Вага:</i>  <b>${weight} кг.</b>
    \n<i> - Дозіл лікаря:</i>  ${medical ? "\u2705" : "\u274C"}`;

  next();
};

module.exports = requestMessageTextCreation;
