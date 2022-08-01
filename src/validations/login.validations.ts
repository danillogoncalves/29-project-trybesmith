import Joi from 'joi';
import Login from '../interfaces/login.interface';

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default function loginValidation(login: Login): Login {
  const { error, value } = schema.validate(login);
  if (error) {
    error.stack = `${error.details[0].type}`;
    throw error;
  }
  return value;
}