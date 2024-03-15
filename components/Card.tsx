import { Heading } from "@components";
import { Project } from "@types";
import { Link } from "expo-router";
import { View } from "react-native";
import { Image } from "expo-image";

interface CardProps {
	project: Project;
}

export function Card({ project }: CardProps) {
	const { name, url, image } = project;

	return (
		<View className="border-solid border-2 border-red rounded p-2">
			<Link href={`/${url}`} className="flex flex-col">
				<Image source={image} contentFit="cover" style={{ flex: 1, width: "100%", aspectRatio: "16/9" }} />
				<Heading type="H3" text={name} styles="self-center" />
			</Link>
		</View>
	);
}
