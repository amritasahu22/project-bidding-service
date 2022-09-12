import express from 'express';
import projectsRouter from './routers/projects';
import customersRouter from './routers/customers';
import tradiesRouter from './routers/tradies';
import bidsRouter from './routers/bids';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/customers', customersRouter);
app.use('/api/tradies', tradiesRouter);
app.use('/api/bids', bidsRouter);

app.get('/', (req, res) => {
	res.send('Hello world!');
});

export default app;
