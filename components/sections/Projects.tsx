import { Card } from "@components";
import { projects } from "@data";
import { Section } from "@expo/html-elements";
import { Heading } from "components/Heading";
import { View } from "react-native";

export function Projects() {
	return (
		<Section className="mt-8">
			<Heading text="My Projects" type="H2" />
			<View className="grid grid-cols-1 gap-5 xs:grid-cols-2">
				{projects.map(({ name, image, url }) => (
					<Card name={name} image={image} url={url} key={name} />
				))}
			</View>
		</Section>
	);
}
