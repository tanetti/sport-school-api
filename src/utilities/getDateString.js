const getDateString = (dateString) => {
  if (!dateString || typeof dateString !== "string") return "НЕВІДОМО";

  return dateString.split("-").reverse().join(".");
};

module.exports = getDateString;
