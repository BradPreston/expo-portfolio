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
	posts: {
		edges: Post[];
	};
}

interface Post {
	post: {
		title: string;
		url: string;
		coverImage: {
			url: string;
		};
	};
}

interface Image {
	url: string;
}
