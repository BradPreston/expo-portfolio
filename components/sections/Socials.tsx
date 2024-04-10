import { socials } from "@data";
import { Section } from "@expo/html-elements";
import { Button, Heading } from "components";
import { View } from "react-native";
import * as Linking from "expo-linking";

export function Socials() {
	function handleOpenUrl(url: string) {
		Linking.openURL(url);
	}

	return (
		<Section className="mt-8">
			<Heading text="Contact Me" type="H2" />
			<View className="flex-row gap-5 flex-wrap">
				{socials.map(({ name, url }) => (
					<Button key={name} text={name} onPress={() => handleOpenUrl(url)} />
				))}
			</View>
		</Section>
	);
}
