const axios = require("axios");

const botKey = process.env.MESSENGER_BOT_KEY;
const debugChatId = process.env.DEBUG_CHAT_ID;

const baseUrl = `https://api.telegram.org/bot${botKey}/sendMessage`;
const postParams = {
  chat_id: debugChatId,
  parse_mode: "html",
};

const sendDebugMessage = async (text) => {
  await axios.post(baseUrl, { ...postParams, text });
};

module.exports = sendDebugMessage;
