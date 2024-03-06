import "../global.css";
import { P } from "@expo/html-elements";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
	text: string;
	styles?: string;
}

export function Paragraph({ text, styles }: ParagraphProps) {
	return <P className={twMerge(`text-zinc-800 dark:text-white text-base font-Poppins ${styles}`)}>{text}</P>;
}
