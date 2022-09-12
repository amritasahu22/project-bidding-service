import Joi, { ValidationResult } from 'joi';
import joiObjId from './validation';

export default interface BidDTO {
	projectId: string;
	tradieId: string;
	bidPrice: number;
	bidType: string;
}

export function validateBid(bid: BidDTO): ValidationResult {
	const schema = Joi.object({
		projectId: joiObjId().required(),
		tradieId: joiObjId().required(),
		bidPrice: Joi.number().required(),
		bidType: Joi.string().required(),
	});

	return schema.validate(bid);
}
