import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    HP = 100;
    constructor(name) {
        this.name = name;
    }
    HPloss() {
        let HP = this.HP - 25;
        this.HP = HP;
    }
    HPRegen() {
        this.HP = 100;
    }
}
//Asking for enemy type
class Enemy {
    name;
    HP = 100;
    constructor(name) {
        this.name = name;
    }
    HPloss() {
        let HP = this.HP - 25;
        this.HP = HP;
    }
}
//Asking for Userame
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your username"
});
console.log("Your Username is " + player.name);
let enemy = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["Assasin", "Dragon", "Zombie"]
});
console.log(enemy.select);
let p1 = new Player(player.name);
let e1 = new Enemy(enemy.select);
do {
    if (enemy.select == "Assasin") {
        console.log("You have chosen to fight the Assasin");
        let action = await inquirer.prompt({
            type: "list",
            name: "opt",
            choices: ["Attack", "Run", "Find Regen Potion"]
        });
        if (action.opt == "Attack") {
            console.log("You Have Chosen To Attack!");
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                e1.HPloss();
                console.log(chalk.bold.yellowBright(`${e1.name} HP is ${e1.HP}`));
                console.log(chalk.bold.blue(`${p1.name} HP is ${p1.HP}`));
                if (e1.HP <= 0) {
                    console.log(chalk.italic.greenBright("You Won!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.HPloss();
                console.log(chalk.italic.blue(`${p1.name} HP is ${p1.HP}`));
                console.log(chalk.italic.yellow(`${e1.name} HP is ${e1.HP}`));
                if (p1.HP <= 0) {
                    console.log(chalk.italic.redBright("You Died"));
                    process.exit();
                }
            }
        }
        if (action.opt == "Run") {
            let num2 = Math.floor(Math.random() * 2);
            if (num2 <= 0) {
                console.log("You have found an escape congratulations");
                process.exit();
            }
            if (num2 > 0) {
                console.log(`The ` + enemy.choices + ` has taken you down`);
            }
        }
        if (action.opt == "Find Regen Potion") {
            console.log("You have Chosen to Find Regen Potion");
            let num1 = Math.floor(Math.random() * 2);
            if (num1 > 0) {
                console.log("You found a regen potion your HP is now full");
                p1.HPRegen();
            }
            if (num1 <= 0) {
                console.log("No regen potion found. Your HP has not increased. Better luck next time");
            }
        }
    }
} while (true);
