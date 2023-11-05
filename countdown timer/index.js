import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "input",
    name: "inputTime",
    message: "Enter your desired time in seconds.",
    validate: (input) => {
        if (isNaN(input)) {
            return 'Please enter a number';
        }
        else if (input > 60) {
            return 'The input should be less than or equal to 60.';
        }
        else {
            return true;
        }
    }
});
let Input = res.inputTime;
function startingTime(val) {
    const begintime = new Date().setSeconds(new Date().getSeconds() + val);
    const timeInterval = new Date(begintime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(timeInterval, currentTime);
        if (timeDifference <= 0) {
            console.log("The timer has ended.");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min} : ${sec}`);
    }, 1000);
}
startingTime(Input);
