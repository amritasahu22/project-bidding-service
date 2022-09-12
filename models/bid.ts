import { Schema, model, Document, Types } from 'mongoose';

interface IBid extends Document {
	projectId: string;
	tradieId: string;
	bidPrice: number;
	bidType: string;
	winningBid?: string;
}

export const bidSchema = new Schema({
	projectId: {
		type: Types.ObjectId,
		ref: 'Project',
	},
	tradieId: {
		type: Types.ObjectId,
		ref: 'Tradie',
	},
	bidPrice: {
		type: Number,
		min: 0,
		required: true,
	},
	bidType: {
		type: String,
		enum: ['fixed', 'hourly'],
		lowercase: true,
		required: true,
	},
	winningBid: {
		type: String,
		enum: ['win', null],
		lowercase: true,
		default: null,
	},
});

const Bid = model<IBid>('Bid', bidSchema);

export default Bid;
