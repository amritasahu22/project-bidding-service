import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';
import { mockProjectData, mockCustomerData, mockTradieData } from './mock_data';

export class ProjectMigration implements MigrationInterface {
	async up(db: Db): Promise<any> {
		await (await db.createCollection('customers')).insertMany(mockCustomerData);
		await (await db.createCollection('tradies')).insertMany(mockTradieData);
		await (await db.createCollection('projects')).insertMany(mockProjectData);
	}

	async down(db: Db): Promise<any> {
		await db.dropCollection('projects');
		await db.dropCollection('customers');
		await db.dropCollection('tradies');
		// 	await db.collection('projects').deleteMany({
		// 		description: {
		// 			$in: ['Plumbing', 'Cleaning', 'Handy man', 'Move out'],
		// 		},
		// 	});
	}
}
