const axios = require("axios");

const botKey = process.env.MESSENGER_BOT_KEY;

const baseUrl = `https://api.telegram.org/bot${botKey}/getUpdates`;

const getBotUpdates = async () => {
  const { data } = await axios.post(baseUrl);

  return data.result;
};

module.exports = getBotUpdates;
