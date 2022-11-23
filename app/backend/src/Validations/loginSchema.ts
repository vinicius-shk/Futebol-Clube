import * as Joi from 'joi'

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "All fields must be filled",
    "string.empty": "All fields must be filled"
  }),
  username: Joi.string(),
  password: Joi.string(),
  role: Joi.string(),
});

export default loginSchema;