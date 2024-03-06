/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins_400Regular"]
			},
			colors: {
				black: "rgb(43, 42, 52)",
				white: "rgb(224, 225, 221)",
				gold: "rgb(203, 167, 47)",
				red: "rgb(233 128 120)",
				lightred: "rgba(213, 99, 90, .25)"
			}
		}
	},
	plugins: []
};
