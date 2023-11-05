"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when: function (answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when: function (answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when: function (answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    var balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    var EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        var remianing = balance - EnteredAmount;
        console.log("Your remaining balance is", remianing);
    }
    else {
        console.log("Insuficient Balance");
    }
}
