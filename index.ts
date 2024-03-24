#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([{
    type: "number",
    name: "randomNumber",
    message: "Enter your gussed number between 1 and 6",
}])

if (answer.randomNumber === randomNumber) {
    console.log(chalk.green(("Congragulations, you gussed the correct number.")));
} else {
    console.log(chalk.red(("you failed, try again.")));
}