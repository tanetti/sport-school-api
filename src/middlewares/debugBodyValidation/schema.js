const joi = require("joi");

const debugBodyValidationSchema = joi.object({
  name: joi.string().min(2).max(40).required().messages({
    "string.base": "Name format mismatch",
    "string.min": "Name minimal length - 2",
    "string.max": "Name maximal length - 40",
    "string.empty": "Name is empty",
    "any.required": "Name is required",
  }),

  phone: joi.string().length(13).required().messages({
    "string.base": "Phone number format mismatch",
    "string.length": "Phone number length mismatch",
    "string.empty": "Phone number is empty",
    "any.required": "Phone number is required",
  }),

  message: joi.string().max(300).required().messages({
    "string.base": "Message format mismatch",
    "string.max": "Message maximal length - 300",
    "string.empty": "Message is empty",
    "any.required": "Message is required",
  }),
});

module.exports = debugBodyValidationSchema;
