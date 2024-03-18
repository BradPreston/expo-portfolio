import { Blog, Heading, Paragraph, Projects, Skills, AboutMe } from "@components";
import { View } from "react-native";
import { bio } from "@data";

export default function Home() {
	// will update later - show border below heading on scroll
	const headingBorder = "border-solid border-b-2 border-gold";

	return (
		<View>
			<Heading text="Brad Preston" type="H1" />
			<Paragraph text={bio} />
			<Skills />
			<Projects />
			<Blog />
			<AboutMe />
		</View>
	);
}
