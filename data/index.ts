import { Project } from "@types";

export const bio = `I am a ${getAge(
	"05/03/1993"
)} year old full stack developer from Kalamazoo, MI. I have a focus on React, React Native (Expo), and TypeScript with ${getAge(
	"01/01/2017"
)} years of practice and ${getAge("07/01/2021")} years of professional experience.`;

// calculate age based on today's date
function getAge(dateString: string) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

export const preferredStack = ["React", "React Native", "Expo", "TypeScript"];

export const techIveUsed = ["Nativewind", "Turborepo", "Tanstack Query", "GraphQL"];

export const projects: Project[] = [
	{
		name: "Portfolio",
		url: "portfolio",
		image: "../assets/bradpreston.png",
		stack: ["React Native", "Expo", "TypeScript", "Nativewind", "TanStack Query", "GraphQL"],
		challenge:
			"I've built a few test projects with Expo in the past, but nothing for the web only. I wanted to grow my skill set in Expo so I made this portfolio using Expo for the web. TanStack Query is another piece of tech that I've used in the past for projects and wanted to build on. Using GraphQL to fetch data from Hashnode for my blog was very easy using TanStack Query."
	},
	{
		name: "One With the Riverbed",
		url: "one-with-the-riverbed",
		image: "../assets/onewiththeriverbed.png",
		stack: ["NextJS", "TypeScript", "Tailwind", "Vercel"],
		challenge:
			"This is the first project I've personally built that has a real impact on a brand. I was asked to build this site to help market One With the Riverbed. We worked together to design the site in a way that best represents the band and their brand."
	}
];
