import app from './app';
import db from './db';
import logger from './logging';

db.connect().then(() => {
	logger.info(`Connected to MongoDB: ` + db.url);
});

const port = process.env.PORT || 3001;
app.listen(port, () => logger.info('Listening on port {$port}...'));
