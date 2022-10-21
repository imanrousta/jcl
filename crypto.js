import chalk from "chalk";

export async function crypto() {
	let coins = await fetch(
		"https://data.messari.io/api/v2/assets"
	).then((response) => response.json());

	console.log(coins);
}
