import { NextFunction, Request, Response } from 'express';
export function auth(req: Request, res: Response, next: NextFunction) {
	//const token = req.header('x-auth-token');
	//if (!token) return res.status(401).send('Access denied. No token provided.');

	const currentTokenForCustomer = {
		_id: '631f218e6561a183810a6d9c',
		name: 'John',
		email: 'johnsmith@gmail.com',
	};

	const currentTokenForTradie = {
		_id: '631e07c21d2c858dd865c309',
		name: 'Eva',
		email: 'evamilton21@gmail.com',
	};

	try {
		//Decode the token
		const decoded = currentTokenForCustomer;
		//req.user = decoded;
		next();
	} catch (ex) {
		res.status(400).send('Invalid token.');
	}
}
