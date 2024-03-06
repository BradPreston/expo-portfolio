import { Slot, useGlobalSearchParams } from "expo-router";
import "../global.css";
import { Head } from "@components";
import { View } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function RootLayout() {
	const { project } = useGlobalSearchParams<{ project: string }>();
	let [fontsLoaded, fontError] = useFonts({
		Poppins_400Regular
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<>
			<Head title={`Brad Preston${project ? ` | ${project}` : ""}`} />
			<View className="bg-slate-100 dark:bg-zinc-900 h-full">
				<Slot />
			</View>
		</>
	);
}
