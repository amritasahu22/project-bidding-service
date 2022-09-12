import { connect as _connect, connection } from 'mongoose';

const dbUrl = process.env.DB_URL || 'mongodb://localhost/project-bidding';

const connect = async () => {
	await _connect(dbUrl);
	console.log('Connected to MongoDB: ' + dbUrl);
};

const close = () => connection.close();

export default { connect, close, url: dbUrl };
