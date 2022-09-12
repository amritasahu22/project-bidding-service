import { Router } from 'express';
import CustomerDTO, { validateCustomer } from '../dtos/customerDto';
import { validateCustomerObjectId } from '../middleware/validateObjectId';
import Customer from '../models/customer';

const router = Router();

router.get('/', async (req, res) => {
	const customers = await Customer.find().select('-__v').sort('firstname');
	res.send(customers);
});

router.get('/:id', validateCustomerObjectId, async (req, res) => {
	const customer = await Customer.findById(req.params.id).select('-__v');
	if (!customer)
		return res
			.status(404)
			.send('The customer with the given ID was not found.');

	res.send(customer);
});

router.post('/', async (req, res) => {
	const { error } = validateCustomer(req.body.data as CustomerDTO);
	if (error) return res.status(400).send(error.details[0].message);

	const { name, email, phone, address } = req.body.data as CustomerDTO;

	let customer = new Customer({
		name,
		email,
		phone,
		address,
	});

	customer = await customer.save();

	res.send(customer);
});

export default router;
