import Joi from 'joi';
import Order from '../interfaces/order.interface';

const schema = Joi.object({
  productsIds: Joi.array()
    .items(Joi.number().required()).required()
    .messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
});

export default function orderValidation(product: Order): Order {
  const { error, value } = schema.validate(product);
  if (error) {
    error.stack = `${error.details[0].type}`;
    throw error;
  }
  return value;
}