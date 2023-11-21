const requestBodyValidationSchema = require("./schema");

const requestBodyValidation = (req, res, next) => {
  const error = requestBodyValidationSchema.validate(req.body).error;

  if (error) {
    const [firstError] = error.details;

    console.log(`Validation ERROR - ${firstError.message}`);

    return res
      .status(400)
      .json({ status: "error", message: "Parameter error" });
  }

  next();
};

module.exports = requestBodyValidation;
