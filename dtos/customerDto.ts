import Joi, { ValidationResult } from 'joi';
import AddressDTO from './addressDto';

export default interface CustomerDTO {
	name: string;
	email: string;
	phone: string;
	address: AddressDTO;
}

export function validateCustomer(customer: CustomerDTO): ValidationResult {
	const schema = Joi.object({
		name: Joi.string().min(5).max(50).required(),
		phone: Joi.string().min(12).max(20).required(),
		email: Joi.string().min(5).max(255).required().email(),
		address: {
			postcode: Joi.number().required(),
		},
		username: Joi.string().min(5).max(30).required(),
		password: Joi.string().min(6).max(30).required(),
	});

	return schema.validate(customer);
}

export function validateUpdateCustomer(
	customer: CustomerDTO
): ValidationResult {
	const schema = Joi.object({
		name: Joi.string().min(5).max(50),
		phone: Joi.string().min(12).max(20),
		email: Joi.string().min(5).max(255).email(),
		address: {
			postcode: Joi.number(),
		},
		username: Joi.string().min(5).max(30),
		password: Joi.string().min(6).max(30),
	});

	return schema.validate(customer);
}
