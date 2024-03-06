import { H1, H2, H3, H4, H5, H6 } from "@expo/html-elements";
import * as React from "react";
import { twMerge } from "tailwind-merge";

type Heading = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

interface HeadingProps {
	text: string;
	type: Heading;
	styles?: string;
}

export function Heading({ text, type, styles }: HeadingProps) {
	const twStyles = "text-sky-300 font-Poppins";

	switch (type) {
		case "H1":
			return <H1 className={twMerge(`${twStyles} ${styles}`)}>{text}</H1>;
		case "H2":
			return <H2 className={twMerge(`${twStyles} ${styles}`)}>{text}</H2>;
		case "H3":
			return <H3 className={twMerge(`${twStyles} ${styles}`)}>{text}</H3>;
		case "H4":
			return <H4 className={twMerge(`${twStyles} ${styles}`)}>{text}</H4>;
		case "H5":
			return <H5 className={twMerge(`${twStyles} ${styles}`)}>{text}</H5>;
		case "H6":
			return <H6 className={twMerge(`${twStyles} ${styles}`)}>{text}</H6>;
		default:
			throw new Error("improper heading type");
	}
}
