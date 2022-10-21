#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import asciichart from "asciichart";
import { graph } from "./graph.js";
import { crypto } from "./crypto.js";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

function welcome() {
	const today = new Date(Date.now());

	console.log("\n");
	console.log(chalk.cyan("\tWelcome to fancy command line!"));

	console.log("\t" + chalk.green(today));
	console.log("\n");
}

await welcome();
await graph();
await crypto();
