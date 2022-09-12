import { Schema, model } from 'mongoose';

export interface IAddress extends Document {
	postcode: number;
}

export interface ICustomer extends Document {
	name: string;
	email: string;
	phone: string;
	address: IAddress;
	username: string;
	password: string;
}

const customerSchema = new Schema<ICustomer>({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
		minlength: 12,
		maxlength: 20,
	},
	address: {
		postcode: {
			type: Number,
			required: true,
			minlength: 4,
			maxlength: 10,
		},
	},
	username: {
		type: String,
		minlength: 5,
		maxlength: 30,
	},
	password: {
		type: String,
		minlength: 6,
		maxlength: 30,
	},
});

const Customer = model<ICustomer>('Customer', customerSchema);

export default Customer;
