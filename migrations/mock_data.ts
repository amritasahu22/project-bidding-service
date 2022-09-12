import { addDays } from 'date-fns';

export const mockProjectData = [
	{
		title: 'General Cleaning 4 bedroom house',
		description: `Cleaning the house, mopping, vaccuming Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sit!`,
		address: {
			postcode: 2145,
		},
		numberOfHours: 10,
		bidDeadline: addDays(new Date(), 3),
		status: 'active',
		postedDate: addDays(new Date(), -2),
		customerId: '631f218e6561a183810a6d9c',
		tradieId: null,
	},
	{
		title: 'Need plumbing service',
		description: 'Plumbing',
		address: {
			postcode: 2121,
		},
		numberOfHours: 5,
		bidDeadline: addDays(new Date(), 5),
		postedDate: addDays(new Date(), -1),
		status: 'active',
		customerId: '631f218e6561a183810a6d9d',
		tradieId: null,
	},
	{
		title: 'Help with full house removals',
		description: `Moving out cleaning, need everything to be cleaned perfectly 
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi ipsam
		aliquid minus quaerat vero assumenda quas totam, eligendi ex officia
		corporis atque accusantium saepe fuga dicta repellat quos doloribus.`,
		address: {
			postcode: 2000,
		},
		numberOfHours: 8,
		bidDeadline: addDays(new Date(), -4),
		postedDate: addDays(new Date(), -8),
		status: 'cancelled',
		customerId: '631f218e6561a183810a6d9c',
		tradieId: null,
	},
	{
		title: 'Make my garden beautiful',
		description: `planting, remove weed, lawn mowing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sit!`,
		address: {
			postcode: 2121,
		},
		numberOfHours: 5,
		bidDeadline: addDays(new Date(), -5),
		postedDate: addDays(new Date(), -10),
		status: 'completed',
		customerId: '631f218e6561a183810a6d9c',
		tradieId: null,
	},
	{
		title: 'Test Title',
		description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, sit!`,
		address: {
			postcode: 2150,
		},
		numberOfHours: 5,
		bidDeadline: addDays(new Date(), -2),
		postedDate: addDays(new Date(), -10),
		status: 'assigned',
		customerId: '631f218e6561a183810a6d9c',
		tradieId: null,
	},
];

export const mockCustomerData = [
	{
		name: 'John Smith',
		phone: '+61477555600',
		email: 'johnsmith@gmail.com',
		address: {
			postcode: 2145,
		},
		username: 'john',
		password: 'bidder',
	},
	{
		name: 'Ray Jackson',
		phone: '+61433081993',
		email: 'rayjackson32@gmail.com',
		address: {
			postcode: 2121,
		},
		username: 'ray',
		password: 'bidder',
	},
];

export const mockTradieData = [
	{
		name: 'Jim Liu',
		phone: '+61477555222',
		email: 'jim.liu@gmail.com',
		address: {
			postcode: 2145,
		},
		username: 'jim',
		password: 'bidder',
	},
	{
		name: 'Eva Milton',
		phone: '+61422888343',
		email: 'evamilton21@gmail.com',
		address: {
			postcode: 2121,
		},
		username: 'eva',
		password: 'bidder',
	},
];

export const mockBiddingData = [
	{
		bidPrice: 'Jim',
		bidType: 'Fixed',
	},
];
