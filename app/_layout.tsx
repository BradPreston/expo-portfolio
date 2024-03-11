import { Slot, useGlobalSearchParams } from "expo-router";
import "../global.css";
import { Head } from "@components";
import { ScrollView, View } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Main } from "@expo/html-elements";
import { QueryClientProvider } from "@query";

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
			<QueryClientProvider>
				<Head title={`Brad Preston${project ? ` | ${project}` : ""}`} />
				<Main className="bg-slate-100 dark:bg-black h-full">
					<ScrollView>
						<View className=" w-[600px] mx-auto py-20 max-w-full">
							<Slot />
						</View>
					</ScrollView>
				</Main>
			</QueryClientProvider>
		</>
	);
}
