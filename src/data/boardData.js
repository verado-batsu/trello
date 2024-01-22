import { nanoid } from 'nanoid'

const boardData = [
	{
		id: nanoid(),
		title: 'Make',
		items: [
			{
				id: nanoid(),
				title: 'Go to the shop'
			},
			{
				id: nanoid(),
				title: 'To throw out the trash'
			},
			{
				id: nanoid(),
				title: 'Eat'
			},
		]
	},
	{
		id: nanoid(),
		title: 'Check',
		items: [
			{
				id: nanoid(),
				title: 'Code review'
			},
			{
				id: nanoid(),
				title: 'Factorial problem'
			},
			{
				id: nanoid(),
				title: 'Fibonacci problems'
			},
		]
	},
	{
		id: nanoid(),
		title: 'Made',
		items: [
			{
				id: nanoid(),
				title: 'Make a video'
			},
			{
				id: nanoid(),
				title: 'Edit video'
			},
			{
				id: nanoid(),
				title: 'Render video'
			},
		]
	},
]

export default boardData;