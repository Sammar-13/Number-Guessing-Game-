#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6);
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }]);
console.log(answer);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations you guessed a right number");
}
else {
    console.log("You guessed a wrong number");
    console.log("Please Try again....");
}
