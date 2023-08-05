import type { Article } from '$lib/types';

export async function load({ fetch, setHeaders }) {
	const res = await fetch(
		'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
	);
	const posts = await res.json();

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return { posts: posts.items as Article[] };
}
