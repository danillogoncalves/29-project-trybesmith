import Joi from 'joi';
import { UserPrivate } from '../interfaces/user.interface';

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default function userValidation(user: UserPrivate): UserPrivate {
  const { error, value } = schema.validate(user);
  if (error) {
    error.stack = `${error.details[0].type}`;
    throw error;
  }
  return value;
}