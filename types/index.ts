export interface Blog {
	user: User;
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
