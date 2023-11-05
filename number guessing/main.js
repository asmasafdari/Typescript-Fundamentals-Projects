#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function startloop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No"],
                message: "Do you want to countinue: "
            }
        ]);
    } while (again.restart === "Yes");
}
startloop();
async function guessNumber() {
    let guessNumb = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: `Guess a Number between 1-10: `
        }
    ]);
    console.log(`Your Guess is ${answer.userguess} while the correct answer is ${guessNumb}`);
    if (answer.userguess === guessNumb) {
        console.log("You Won!!!");
    }
    else {
        console.log(`${chalk.cyan('Wrong Answer')}`);
    }
}
