import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { projects } from "@data";

export default function Project() {
	const { project_url } = useLocalSearchParams<{ project_url: string }>();

	if (!project_url) return;

	const project = projects.filter(p => p.url === project_url)[0] || null;

	if (!project) {
		return (
			<View>
				<Text>No such project</Text>
			</View>
		);
	}

	return (
		<View>
			<Text>{project.name}</Text>
		</View>
	);
}
