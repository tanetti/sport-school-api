const SECTIONS = require("../constants/sections");

const getChatId = (sectionName) => {
  if (!sectionName || typeof sectionName !== "string") return null;

  return SECTIONS.find(({ name }) => name === sectionName)?.chatId;
};

module.exports = getChatId;
