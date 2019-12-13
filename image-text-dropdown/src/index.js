const elem = document.querySelector('image-text-dropdown');
const values = [
	{
		title: 'Ukraine',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Israel',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Great Britain',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Germany',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'USA',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Canada',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Sweden',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Poland',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
	{
		title: 'Bulgaria',
		flag: 'https://image.flaticon.com/icons/png/512/197/197572.png',
	},
];

elem.setAttribute('search-values', JSON.stringify(values));
