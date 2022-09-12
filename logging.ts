import winston from 'winston';
import 'express-async-errors';

const logger = winston.createLogger({
	transports: [new winston.transports.File({ filename: 'combined.log' })],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json()
	),
	exitOnError: false,
});

export default logger;
