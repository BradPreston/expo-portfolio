import { useLocalSearchParams, useRootNavigationState, Redirect, useRouter } from "expo-router";
import { View } from "react-native";
import { projects } from "@data";
import { Button, Heading, List, Paragraph } from "@components";
import { Image } from "expo-image";

export default function Project() {
	const { project_url } = useLocalSearchParams<{ project_url: string }>();
	if (!project_url) return;

	const rootNavigationState = useRootNavigationState();
	if (!rootNavigationState?.key) return;

	const project = projects.filter((p) => p.url === project_url)[0] || null;
	if (!project) {
		return <Redirect href="/404" />;
	}

	const router = useRouter();
	return (
		<View>
			<Button text="Go Back" onPress={() => router.back()} />
			<Heading type="H1" text={project.name} styles="mt-5" />
			<Image
				source={project.image}
				contentFit="cover"
				style={{ flex: 1, width: "100%", aspectRatio: "16/9", marginVertical: 10 }}
			/>
			<Heading type="H2" text="Challenge" />
			<Paragraph text={project.challenge} />
			<Heading type="H2" text="Stack" />
			<List items={project.stack} />
		</View>
	);
}
