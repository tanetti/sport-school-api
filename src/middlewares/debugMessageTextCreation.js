const debugMessageTextCreation = (req, res, next) => {
  const {
    body: { name, phone, message },
  } = req;

  req.debugText = `<b>New message from DEBUG branch!</b>
  \n<i> - Client name:</i>  <b>${name}</b>\n<i> - Phone number:</i>  <a href="tel:${phone}">${phone}</a>
  \n${message}`;

  next();
};

module.exports = debugMessageTextCreation;
