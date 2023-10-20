#!/usr/bin/env node
import inquirer from "inquirer";
let Conversion = {
    "GBP": {
        "GBP": 1.00,
        "USD": 1.22,
        "AED": 4.47,
        "AUD": 1.90,
        "PKR": 353.15,
        "EUR": 1.15
    },
    "USD": {
        "GBP": 0.82,
        "USD": 1.00,
        "AED": 3.67,
        "AUD": 1.56,
        "PKR": 290.50,
        "EUR": 0.95
    },
    "AED": {
        "GBP": 0.22,
        "USD": 0.27,
        "AED": 1.00,
        "AUD": 0.43,
        "PKR": 79.09,
        "EUR": 0.26
    },
    "AUD": {
        "GBP": 0.53,
        "USD": 0.64,
        "AED": 2.35,
        "AUD": 1.00,
        "PKR": 185.76,
        "EUR": 0.61
    },
    "PKR": {
        "GBP": 0.0028,
        "USD": 0.0034,
        "AED": 0.013,
        "AUD": 0.0054,
        "PKR": 1.00,
        "EUR": 0.0033
    },
    "EUR": {
        "GBP": 0.87,
        "USD": 1.06,
        "AED": 3.88,
        "AUD": 1.65,
        "PKR": 306.91,
        "EUR": 1.00
    }
};
async function startLoop() {
    let again;
    do {
        await convertAmount();
        again = await inquirer.prompt([
            {
                type: "checkbox",
                name: "continue",
                choices: ["Yes", "No"],
                message: "Would you like to continue?"
            }
        ]);
    } while (again.continue == "Yes");
}
startLoop();
async function convertAmount() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "convertFrom",
            choices: ["GBP", "USD", "AED", "AUD", "PKR", "EUR"],
            message: "Please select the currency you want to convert:"
        },
        {
            type: "list",
            name: "convertTo",
            choices: ["GBP", "USD", "AED", "AUD", "PKR", "EUR"],
            message: "Please choose the currency you want to convert to from the options below:"
        },
        {
            type: "number",
            name: "amount",
            message: `How much do you want to convert? Please type the amount:`
        }
    ]);
    const { convertFrom, convertTo, amount } = answer;
    if (convertFrom && convertTo && amount) {
        let result = Conversion[convertFrom][convertTo] * amount;
        console.log(`The conversion of ${amount} ${convertFrom} in ${convertTo} is: ${result}.`);
    }
    else {
        console.log(`Invalid Input. Please check and try again.`);
    }
}
