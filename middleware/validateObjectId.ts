import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';

export function validateProjectObjectId(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!Types.ObjectId.isValid(req.params.id))
		return res.status(404).send('Invalid Project ID');

	next();
}

export function validateCustomerObjectId(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!Types.ObjectId.isValid(req.params.id))
		return res.status(404).send('Invalid Customer ID');

	next();
}

export function validateTradieObjectId(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!Types.ObjectId.isValid(req.params.id))
		return res.status(404).send('Invalid Tradie ID');

	next();
}

export function validateBidObjectId(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!Types.ObjectId.isValid(req.params.id))
		return res.status(404).send('Invalid Bid ID');

	next();
}
