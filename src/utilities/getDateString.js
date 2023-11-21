const getDateString = (dateString) => {
  if (!dateString || typeof dateString !== "string") return "НЕВІДОМО";

  const birthdate = new Date(dateString);

  const year = birthdate.getFullYear();
  const month = birthdate.getMonth() + 1;
  const date = birthdate.getDate();

  const newDateString = `${date.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;

  return newDateString;
};

module.exports = getDateString;
