import * as Joi from 'joi';

const customMessage = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': customMessage,
    'string.empty': customMessage,
  }),
  username: Joi.string(),
  password: Joi.string().required().messages({
    'any.required': customMessage,
    'string.empty': customMessage,
  }),
  role: Joi.string(),
});

export default loginSchema;
