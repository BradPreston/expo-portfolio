import { Slot, useGlobalSearchParams } from "expo-router";
import "../global.css";
import { Head } from "@components";
import { View } from "react-native";

export default function RootLayout() {
	const { project } = useGlobalSearchParams<{ project: string }>();

	return (
		<>
			<Head title={`Brad Preston${project ? ` | ${project}` : ""}`} />
			<View className="bg-blue-500 dark:bg-red-600 h-full">
				<Slot />
			</View>
		</>
	);
}
