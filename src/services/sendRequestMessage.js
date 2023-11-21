const axios = require("axios");

const botKey = process.env.BOT_KEY;

const baseUrl = `https://api.telegram.org/bot${botKey}/sendMessage`;

const sendRequestMessage = async ({ chatId, text }) => {
  const postParams = {
    chat_id: chatId,
    parse_mode: "html",
    text,
  };

  await axios.post(baseUrl, postParams);
};

module.exports = sendRequestMessage;
