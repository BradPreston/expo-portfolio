import { Heading } from "@components";
import { Link } from "expo-router";
import { View } from "react-native";
import { Image } from "expo-image";
import { A } from "@expo/html-elements";

interface CardProps {
	name: string;
	url: string;
	image: string;
	target?: "_blank" | "_self";
}

export function Card({ name, url, image, target }: CardProps) {
	if (url.startsWith("http")) {
		return (
			<View className="border-solid border-2 border-red rounded p-2">
				<A href={url} className="flex flex-col" target={target || "_self"}>
					<Image source={image} contentFit="cover" style={{ flex: 1, width: "100%", aspectRatio: "16/9" }} />
					<Heading type="H3" text={name} styles="self-center text-center" />
				</A>
			</View>
		);
	}

	return (
		<View className="border-solid border-2 border-red rounded p-2">
			<Link href={`/${url}`} className="flex flex-col">
				<Image source={image} contentFit="cover" style={{ flex: 1, width: "100%", aspectRatio: "16/9" }} />
				<Heading type="H3" text={name} styles="self-center text-center" />
			</Link>
		</View>
	);
}
