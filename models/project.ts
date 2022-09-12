import { Schema, model, Document, Types } from 'mongoose';

interface IAddress extends Document {
	postcode: number;
}

interface IProject extends Document {
	title: string;
	description: string;
	address: IAddress;
	numberOfHours: number;
	bidDeadline: Date;
	status: string;
	postedDate?: Date;
	customerId: string;
	tradieId: string;
}

export const projectSchema = new Schema({
	title: {
		type: String,
		minlength: 5,
		maxlength: 50,
		required: true,
	},
	description: {
		type: String,
		minlength: 5,
		maxlength: 200,
		required: true,
	},
	address: {
		postcode: { type: Number, minlength: 4, maxlength: 10, required: true },
	},
	numberOfHours: { type: Number, min: 1, max: 50, required: true },
	bidDeadline: { type: Date, required: true },
	status: {
		type: String,
		enum: ['active', 'cancelled', 'assigned', 'complete'],
		default: 'active',
		lowercase: true,
	},
	postedDate: { type: Date, default: new Date() },
	customerId: {
		type: Types.ObjectId,
		ref: 'Customer',
		required: true,
	},
	tradieId: {
		type: Types.ObjectId,
		ref: 'Tradie',
		default: null,
	},
});

const Project = model<IProject>('Project', projectSchema);

export default Project;
