import inquirer from "inquirer";

const input: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your text here, please: "
    }
])

const text = input.Sentence.trim().split(" ")
console.log(`The word count of your text is ${text.length}`)