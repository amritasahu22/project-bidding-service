import db from '../db';
import { mongoMigrateCli } from 'mongo-migrate-ts';

mongoMigrateCli({
	uri: db.url,
	database: 'project-bidding',
	migrationsDir: __dirname,
	migrationsCollection: 'migrations_projects',
});
