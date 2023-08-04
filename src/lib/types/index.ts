export type Article = {
	title: string;
	pubDate: string;
	link: string;
	guid: string;
	author: string;
	thumbnail: string;
	description: string;
	content: string;
	categories: string[];
};

export type Project = {
	id: number;
	title: string;
	description: string;
	main_image: string;
	link: string;
	appstore_link: string;
	github: string;
	tags: string[];
};
