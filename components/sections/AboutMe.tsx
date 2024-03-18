import { Heading, Paragraph } from "@components";
import { Section } from "@expo/html-elements";
import { aboutMe } from "@data";

export function AboutMe() {
	return (
		<Section className="mt-8">
			<Heading text="About Me" type="H2" />
			<Paragraph text={aboutMe} />
		</Section>
	);
}
