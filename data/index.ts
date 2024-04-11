import { Project } from "@types";

export const bio = `I am a ${getAge(
	"05/03/1993"
)} year old developer from Kalamazoo, MI. I have a focus on React, React Native (Expo), and TypeScript with ${getAge(
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

export const techIveUsed = ["Nativewind", "Turborepo", "Tanstack Query", "GraphQL", "Zustand"];

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
	},
	{
		name: "Kazoo 48",
		url: "kazoo-48",
		image: "../assets/kazoo48.png",
		stack: ["NextJS", "TypeScript", "Sass", "Stripe", "Vercel"],
		challenge:
			"This platform needed to securely take payments and also prevent users from signing up without paying. I opted for the Stripe checkout page so that I didn't have to handle any payments myself. Using the API, I would store if the user had a successful payment before sending the entry to the Kazoo48 team. If a user hasn't entered, they're redirected to the signup form. This solution has had zero fraudulent entries and has ran for 2 years."
	}
];

export const aboutMe = `I am a self taught guitar player of ${getAge(
	"01/01/2003"
)} years, a die-hard Detroit Red Wings fan, and a lover of Pokemon. Being a guitar player, I'm a big fan of music. Some of my favorite genres are country/folk, jazz, and progressive rock. I also enjoy a good Sci-fi, horror, or fantasy book.`;

export const socials: {
	name: string;
	url: string;
}[] = [
	{
		name: "Email",
		url: "mailto:bap5393@gmail.com"
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/brad-preston"
	},
	{
		name: "GitHub",
		url: "https://github.com/BradPreston"
	},
	{
		name: "X",
		url: "https://x.com/braddoescoding"
	}
];
