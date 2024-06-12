import type { Article } from '$lib/types';

export async function load({ fetch, setHeaders }) {
	// const res = await fetch(
	// 	'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
	// );
	// const posts = await res.json();
	// setHeaders({
	// 	'Cache-Control': 'max-age=3600'
	// });
	// return { posts: posts.items as Article[] };
	return {
		posts: [
			{
				title: 'Introducing Mainichi Habits',
				pubDate: '2023-08-17 10:43:39',
				link: 'https://chadmuro.medium.com/introducing-mainichi-habits-93e6367ec7f7?source=rss-6bb3c9d1a1f4------2',
				guid: 'https://medium.com/p/93e6367ec7f7',
				author: 'Chad Murobayashi',
				thumbnail: '',
				description: '',
				categories: ['habits', 'habit-building', 'apps', 'app-store', 'app-development']
			},
			{
				title: 'What is the Difference Between Local Storage and Session Storage?',
				pubDate: '2021-12-07 13:33:03',
				link: 'https://levelup.gitconnected.com/what-is-the-difference-between-local-storage-and-session-storage-1bd81d8375b4?source=rss-6bb3c9d1a1f4------2',
				guid: 'https://medium.com/p/1bd81d8375b4',
				author: 'Chad Murobayashi',
				thumbnail: '',
				description: '',
				categories: ['technology', 'sessionstorage', 'programming', 'javascript', 'localstorage']
			},
			{
				title: 'How to Use the Set Object in JavaScript',
				pubDate: '2021-11-04 18:18:29',
				link: 'https://blog.devgenius.io/how-to-use-the-set-object-in-javascript-745b10a64e16?source=rss-6bb3c9d1a1f4------2',
				guid: 'https://medium.com/p/745b10a64e16',
				author: 'Chad Murobayashi',
				thumbnail: '',
				description: '',
				categories: ['technology', 'programming', 'arrays', 'set', 'javascript']
			},
			{
				title: 'How to Use the Dialog Component with Headless UI and Tailwind CSS',
				pubDate: '2021-11-02 09:18:03',
				link: 'https://javascript.plainenglish.io/how-to-use-the-dialog-component-with-headless-ui-and-tailwind-css-f8f11edcaf06?source=rss-6bb3c9d1a1f4------2',
				guid: 'https://medium.com/p/f8f11edcaf06',
				author: 'Chad Murobayashi',
				thumbnail: '',
				description: '',
				categories: ['web-development', 'react', 'javascript', 'css', 'programming']
			},
			{
				title: 'How to Use the useState Hook in React With TypeScript',
				pubDate: '2021-10-28 08:02:53',
				link: 'https://javascript.plainenglish.io/how-to-use-the-usestate-hook-in-react-with-typescript-4463b0b4051f?source=rss-6bb3c9d1a1f4------2',
				guid: 'https://medium.com/p/4463b0b4051f',
				author: 'Chad Murobayashi',
				thumbnail: '',
				description: '<',
				categories: ['react', 'web-development', 'typescript', 'programming', 'javascript']
			}
		] as Article[]
	};
}
