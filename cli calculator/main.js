#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const add_js_1 = require("./add.js");
const subtract_js_1 = require("./subtract.js");
const multiply_js_1 = require("./multiply.js");
const divide_js_1 = require("./divide.js");
let answer = await inquirer_1.default.prompt([
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
]);
if (answer.operation === "+") {
    let result = (0, add_js_1.add)(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "-") {
    let result = (0, subtract_js_1.subtract)(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "*") {
    let result = (0, multiply_js_1.multiply)(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
else if (answer.operation === "/") {
    let result = (0, divide_js_1.divide)(answer.num1, answer.num2);
    console.log("Your answer is: ", result);
}
