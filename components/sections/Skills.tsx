import { Button, Heading, List } from "@components";
import { preferredStack, techIveUsed } from "@data";
import { Section } from "@expo/html-elements";
import { View } from "react-native";
import { useAssets } from "expo-asset";
import * as WebBrowser from "expo-web-browser";

export function Skills() {
	const [assets, error] = useAssets(require("../../assets/Brad-Preston-Resume-2024.pdf"));

	if (!assets || error) return;

	async function handleViewResume() {
		WebBrowser.openBrowserAsync(assets![0].uri);
	}

	return (
		<Section className="mt-8">
			<Heading text="My Skills" type="H2" />
			<View className="flex-row gap-10 mb-10">
				<View>
					<Heading text="Preferred Stack" type="H3" />
					<List items={preferredStack} />
				</View>
				<View>
					<Heading text="Tech I've Used" type="H3" />
					<List items={techIveUsed} />
				</View>
			</View>
			<Button text="Download my resume" onPress={handleViewResume} />
		</Section>
	);
}
