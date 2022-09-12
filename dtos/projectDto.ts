import Joi, { ValidationResult } from 'joi';

import AddressDTO from './addressDto';
import joiObjId from './validation';

export default interface ProjectDTO {
	title: string;
	description: string;
	address?: AddressDTO;
	numberOfHours: number;
	bidDeadline: Date;
	customerId: string;
}

export function validateProject(project: ProjectDTO): ValidationResult {
	const schema = Joi.object({
		title: Joi.string().min(5).max(50).required(),
		description: Joi.string().min(5).max(500).required(),
		numberOfHours: Joi.number().min(1).max(50).required(),
		bidDeadline: Joi.date().required(),
		address: {
			postcode: Joi.number().required(),
		},
		customerId: joiObjId().required(),
	});
	return schema.validate(project);
}
