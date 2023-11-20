const debugBodyValidationSchema = require("./schema");

const debugBodyValidation = (req, res, next) => {
  const error = debugBodyValidationSchema.validate(req.body).error;

  if (error) {
    const [firstError] = error.details;

    return res
      .status(400)
      .json({ status: "error", message: firstError.message });
  }

  next();
};

module.exports = debugBodyValidation;
