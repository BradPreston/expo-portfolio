import { Pressable, Text, View } from "react-native";

interface ButtonProps {
	text: string;
	onPress(): void;
}

export function Button({ text, onPress }: ButtonProps) {
	return (
		<View className="w-fit">
			<Pressable onPress={onPress}>
				<Text className="border-solid border-2 border-red rounded text-red font-Poppins text-base cursor-pointer transition-all py-3 px-5 hover:text-white hover:bg-lightred">
					{text}
				</Text>
			</Pressable>
		</View>
	);
}
