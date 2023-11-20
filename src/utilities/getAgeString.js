const getAgeString = (dateString) => {
  if (!dateString || typeof dateString !== "string") return "НЕВІДОМО";

  const now = new Date();

  const yearNow = now.getYear();
  const monthNow = now.getMonth();
  const dateNow = now.getDate();

  const dob = new Date(dateString);

  const yearDob = dob.getYear();
  const monthDob = dob.getMonth();
  const dateDob = dob.getDate();
  let age = {};
  let ageString = "";
  let yearString = "";
  let monthString = "";

  let yearAge = yearNow - yearDob;
  let monthAge = null;

  if (monthNow >= monthDob) {
    monthAge = monthNow - monthDob;
  } else {
    yearAge -= 1;
    monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow < dateDob) {
    monthAge -= 1;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge -= 1;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
  };

  if (age.years === 1 || (age.years % 10 === 1 && age.years > 20)) {
    yearString = " рік";
  } else if (
    (age.years > 1 && age.years < 5) ||
    (age.years % 10 > 1 && age.years % 10 < 5 && age.years > 20)
  ) {
    yearString = " роки";
  } else {
    yearString = " років";
  }

  if (age.months === 1) {
    monthString = " місяць";
  } else if (age.months > 1 && age.months < 5) {
    monthString = " місяці";
  } else {
    monthString = " місяців";
  }

  if (age.years > 0 && age.months > 0) {
    ageString = age.years + yearString + ", " + age.months + monthString;
  } else if (age.years > 0 && age.months === 0) {
    ageString = age.years + yearString;
  } else if (age.years === 0 && age.months > 0) {
    ageString = age.months + monthString;
  } else {
    ageString = "НЕВІДОМО";
  }

  return ageString;
};

module.exports = getAgeString;
