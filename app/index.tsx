import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
	return (
		<View>
			<Text className="text-red-500">Home page</Text>
			<Link href={{ pathname: "/[project]", params: { project: "Brad" } }}>Brad</Link>
		</View>
	);
}
