import { Router } from 'express';
import ProjectDTO, { validateProject } from '../dtos/projectDto';
import { validateProjectObjectId } from '../middleware/validateObjectId';
import Project from '../models/project';
import Customer from '../models/customer';

const router = Router();

router.get('/', async (req, res) => {
	const userId = req.header('x-auth-token');
	console.log('UserID::', userId);
	const projects = await Project.where('customerId')
		.equals(userId)
		.sort({ postedDate: -1, active: -1 })
		.limit(20);
	res.send(projects);
});

router.post('/', async (req, res) => {
	const customerId = req.header('x-auth-token');
	console.log(customerId);
	// const { error } = validateProject(req.body.data as ProjectDTO);
	// if (error) return res.status(400).send(error?.details[0]?.message);

	const request = req.body.data as ProjectDTO;

	const customer = await Customer.findById(customerId);
	if (!customer) return res.status(400).send('Invalid customer ID.');

	const project = new Project({
		title: request.title,
		description: request.description,
		address: request.address,
		bidDeadline: request.bidDeadline,
		numberOfHours: request.numberOfHours,
		customerId: customerId,
	});

	const result = await project.save();
	res.status(201).send(result);
});

router.get('/:id', validateProjectObjectId, async (req, res) => {
	const project = await Project.findById(req.params.id).select('-__v');
	if (!project)
		return res.status(404).send('The project with the given ID was not found.');

	res.send(project);
});

//TODO: Update and delete project

export default router;
