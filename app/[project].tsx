import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Project() {
	const { project } = useLocalSearchParams<{ project: string }>();

	if (!project) return;

	return (
		<View>
			<Text>{project}</Text>
		</View>
	);
}
