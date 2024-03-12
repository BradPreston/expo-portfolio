export const bio = `I am a ${getAge(
	"05/03/1993"
)} year old full stack developer from Kalamazoo, MI. I have a focus on React, React Native (Expo), and Typescript with ${getAge(
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
