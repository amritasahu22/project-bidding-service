import { Router } from 'express';
import BidDTO, { validateBid } from '../dtos/bidDto';
import { validateBidObjectId } from '../middleware/validateObjectId';
import Bid from '../models/bid';
import Project from '../models/project';
import Tradie from '../models/tradie';

const router = Router();

router.get('/', async (req, res) => {
	const bids = await Bid.find().select('-__v').sort('_id');
	res.send(bids);
});

router.post('/', async (req, res) => {
	const { error } = validateBid(req.body.data as BidDTO);
	console.log(error);
	if (error) return res.status(400).send(error?.details[0]?.message);

	const request = req.body.data as BidDTO;

	const project = await Project.findById(request.projectId);
	if (!project) return res.status(400).send('Invalid project ID.');

	const tradie = await Tradie.findById(request.tradieId);
	if (!tradie) return res.status(400).send('Invalid tradie ID.');

	const bid = new Bid({
		bidPrice: request.bidPrice,
		bidType: request.bidType,
		projectId: request.projectId,
		tradieId: request.tradieId,
	});

	console.log('Bid::', bid);
	const result = await bid.save();
	console.log('Result::', result);
	res.status(201).send(bid);
});

router.get('/:id', validateBidObjectId, async (req, res) => {
	//const bid = await Bid.findById(req.params.id).select('-__v');

	const bid = await Bid.findById(req.params.id)
		.populate('projectId', 'title -_id')
		.populate('tradieId', '_id, name')
		.select('bidPrice, projectId');
	console.log(bid);
	if (!bid)
		return res.status(404).send('The bid with the given ID was not found.');

	res.send(bid);
});

//TODO: Update and delete bid

export default router;
