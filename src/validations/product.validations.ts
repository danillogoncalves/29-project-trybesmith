import Joi from 'joi';
import Product from '../interfaces/product.interface';

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default function productValidation(product: Product): Product {
  const { error, value } = schema.validate(product);
  if (error) {
    error.stack = `${error.details[0].type}`;
    throw error;
  }
  return value;
}