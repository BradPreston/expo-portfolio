export interface Blog {
	user: User;
}

export interface Project {
	name: string;
	url: string;
	image: string;
	stack: string[];
	challenge: string;
}

interface User {
	id: string;
	posts: Post[];
}

interface Post {
	title: string;
	url: string;
	coverImage: Image;
}

interface Image {
	url: string;
}
