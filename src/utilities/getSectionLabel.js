const SECTIONS = require("../constants/sections");

const getSectionLabel = (sectionName) => {
  if (!sectionName || typeof sectionName !== "string") return "НЕВІДОМО";

  return SECTIONS.find(({ name }) => name === sectionName)?.label || "НЕВІДОМО";
};

module.exports = getSectionLabel;
