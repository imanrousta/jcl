import chalk from "chalk";
import asciichart from "asciichart";

export function graph() {
	let s = new Array(100);
	for (let i = 0; i < s.length; i++)
		s[i] = 15 * Math.sin(i * ((Math.PI * 4) / s.length));

	let config = {
		height: 10,
		colors: [asciichart.blue],
	};
	console.log(chalk.yellow(asciichart.plot(s, config)));
}
