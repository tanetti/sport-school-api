const joi = require("joi");

const requestBodyValidationSchema = joi.object({
  section: joi.string().required().messages({
    "string.base": "Section format mismatch",
    "string.empty": "Section is empty",
    "any.required": "Section is required",
  }),

  name: joi.string().min(2).max(30).required().messages({
    "string.base": "Name format mismatch",
    "string.min": "Name minimal length - 2",
    "string.max": "Name maximal length - 30",
    "string.empty": "Name is empty",
    "any.required": "Name is required",
  }),

  surename: joi.string().min(2).max(30).required().messages({
    "string.base": "Surename format mismatch",
    "string.min": "Surename minimal length - 2",
    "string.max": "Surename maximal length - 30",
    "string.empty": "Surename is empty",
    "any.required": "Surename is required",
  }),

  phone: joi.string().length(19).required().messages({
    "string.base": "Phone number format mismatch",
    "string.length": "Phone number length mismatch",
    "string.empty": "Phone number is empty",
    "any.required": "Phone number is required",
  }),

  birthdate: joi.date().required().messages({
    "date.base": "Birthdate format mismatch",
    "any.required": "Birthdate is required",
  }),

  height: joi.number().required().messages({
    "number.base": "Height format mismatch",
    "any.required": "Height is required",
  }),

  weight: joi.number().required().messages({
    "number.base": "Weight format mismatch",
    "any.required": "Weight is required",
  }),

  medical: joi.bool().required().messages({
    "bool.base": "Medical format mismatch",
    "any.required": "Medical is required",
  }),
});

module.exports = requestBodyValidationSchema;
