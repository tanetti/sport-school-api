const clearPhoneNumber = (phoneString) => {
  if (!phoneString || typeof phoneString !== "string") return "НЕВІДОМО";

  const phoneArray = phoneString.split("");
  const clearPhoneArray = [];

  phoneArray.forEach((char) => {
    if (char !== "+" && isNaN(parseInt(char))) return;

    clearPhoneArray.push(char);
  });

  return clearPhoneArray.join("");
};

module.exports = clearPhoneNumber;
