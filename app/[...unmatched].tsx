import { Heading, Button } from "@components";
import { View } from "react-native";
import { useRouter } from "expo-router";

export default function NotFound() {
	const router = useRouter();

	return (
		<View>
			<Heading type="H1" text="Ope! It appears that page doesn't exist." styles="text-center" />
			<View className="flex-row justify-center mt-5">
				<Button text="Go Home" onPress={() => router.push("/")} />
			</View>
		</View>
	);
}
