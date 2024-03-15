import { Section } from "@expo/html-elements";
import { BlogQuery, GET_ALL_POSTS } from "@query";
import { Heading } from "components/Heading";
import { Blog as BlogType } from "@types";
import { Card } from "components/Card";
import { View } from "react-native";

export function Blog() {
	const { data } = BlogQuery<BlogType>("allBlogs", GET_ALL_POSTS);

	if (!data) return;

	return (
		<Section className="mt-8">
			<Heading text="My Blog" type="H2" />
			<View className="grid grid-cols-1 gap-5 xs:grid-cols-2">
				{data.user.posts.edges.map(({ post }) => (
					<Card name={post.title} url={post.url} image={post.coverImage.url} key={post.title} target="_blank" />
				))}
			</View>
		</Section>
	);
}
