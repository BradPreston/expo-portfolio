import { LI, UL } from "@expo/html-elements";
import { Text } from "react-native";

interface ListProps {
	items: string[];
	styles?: string;
}

export function List({ items, styles }: ListProps) {
	return (
		<UL>
			{items.map((item) => (
				<LI key={item}>
					<Text className="text-black dark:text-white text-base font-Poppins list-disc">&bull; {item}</Text>
				</LI>
			))}
		</UL>
	);
}
