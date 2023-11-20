const requestMessageTextCreation = (req, res, next) => {
  const {
    body: { section, name, phone },
  } = req;

  req.requestText = `<b>Запит до секції ${section}'</b>
  \n<i> - Client name:</i>  <b>${name}</b>\n<i> - Phone number:</i>  <a href="tel:${phone}">${phone}</a>`;

  next();
};

module.exports = requestMessageTextCreation;
