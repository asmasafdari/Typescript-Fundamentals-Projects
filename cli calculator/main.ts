#!/usr/bin/env node
import inquirer from "inquirer";
import { add } from "./add.js";
import {subtract} from "./subtract.js"
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";



let answer = await inquirer.prompt([
    {
    name: "num1",
    type: "number",
    message: "Enter the first number:"
    },
    {
    name: "num2",
    type: "number",
    message: "Enter the second number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Awesome! Using the arrow keys, select from the list below:"
        }

])

if (answer.operation === "+") {
    let result = add(answer.num1, answer.num2)

    console.log("Your answer is: ", result)
} 

else if (answer.operation === "-") {

    let result = subtract(answer.num1, answer.num2)

    console.log("Your answer is: ", result)
}

else if (answer.operation === "*") {

    let result = multiply(answer.num1, answer.num2)

    console.log("Your answer is: ", result)
}

else if (answer.operation === "/") {

    let result = divide(answer.num1, answer.num2)

    console.log("Your answer is: ", result)
}