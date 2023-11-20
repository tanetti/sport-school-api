const axios = require("axios");

const botKey = process.env.MESSENGER_BOT_KEY;

const baseUrl = `https://api.telegram.org/bot${botKey}/sendMessage`;
const postParams = {
  parse_mode: "html",
};

const sendDebugUserMessage = async (userId, text) => {
  await axios.post(baseUrl, { ...postParams, chat_id: userId, text });
};

module.exports = sendDebugUserMessage;
