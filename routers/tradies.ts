import { Router } from 'express';
import TradieDTO, { validateTradie } from '../dtos/tradieDto';
import { validateTradieObjectId } from '../middleware/validateObjectId';
import Project from '../models/project';
import Tradie from '../models/tradie';

const router = Router();

router.get('/projects', async (req, res) => {
	const projects = await Project.find()
		.populate('customerId', 'name -_id')
		.select({
			_id: 1,
			title: 1,
			status: 1,
			description: 1,
			address: 1,
			postedDate: 1,
			bidDeadline: 1,
		});
	// .sort({ postedDate: -1, active: -1 });

	res.send(projects);
});

router.get('/projects/:id', validateTradieObjectId, async (req, res) => {
	const project = await Project.findById(req.params.id).select('-__v');

	if (!project)
		return res.status(404).send('The project with the given ID was not found.');

	res.send(project);
});

router.get('/', async (req, res) => {
	const tradies = await Tradie.find().select('-__v').sort('firstname');
	res.send(tradies);
});

router.get('/:id', validateTradieObjectId, async (req, res) => {
	const tradie = await Tradie.findById(req.params.id).select('-__v');
	if (!tradie)
		return res.status(404).send('The tradie with the given ID was not found.');

	res.send(tradie);
});

router.post('/', async (req, res) => {
	const { error } = validateTradie(req.body.data as TradieDTO);
	if (error) return res.status(400).send(error.details[0].message);

	const { name, email, phone, address } = req.body.data as TradieDTO;

	let tradie = new Tradie({
		name,
		email,
		phone,
		address,
	});

	tradie = await tradie.save();
	console.log('Tradie::', tradie);
	res.send(tradie);
});

export default router;
