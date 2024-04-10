import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";
import { projects } from "@data";
import { Button, Heading, List, Paragraph } from "@components";
import { Image } from "expo-image";

export default function Project() {
	const { project_url } = useLocalSearchParams<{ project_url: string }>();

	if (!project_url) return;

	const project = projects.filter(p => p.url === project_url)[0] || null;

	if (!project) {
		return (
			<View>
				<Heading type='H1' text="No such project" />
			</View>
		);
	}

	const router = useRouter();

	function handleGoBack() {
		router.back();
	}

	return (
		<View>
			<Button text="Go Back" onPress={handleGoBack} />
			<Heading type='H1' text={project.name} styles="mt-5" />
			<Image source={project.image} contentFit="cover" style={{ flex: 1, width: "100%", aspectRatio: "16/9", marginVertical: 10 }} />
			<Heading type="H2" text="Challenge" />
			<Paragraph text={project.challenge} />
			<Heading type="H2" text="Stack" />
			<List items={project.stack} />
		</View>
	);
}
