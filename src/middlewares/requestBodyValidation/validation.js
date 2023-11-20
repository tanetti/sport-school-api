const requestBodyValidationSchema = require("./schema");

const requestBodyValidation = (req, res, next) => {
  const error = requestBodyValidationSchema.validate(req.body).error;

  if (error) {
    const [firstError] = error.details;

    return res
      .status(400)
      .json({ status: "error", message: firstError.message });
  }

  next();
};

module.exports = requestBodyValidation;
