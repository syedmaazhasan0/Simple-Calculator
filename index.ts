#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multipication","Division","Percentage"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
    
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
    
} else if (answer.operator === "Multipication") {
    console.log(answer.firstNumber * answer.secondNumber);
    
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
    
} else if(answer.operator === "Percentage") {
    console.log(answer.firstNumber / answer.secondNumber * 100 + "%");
    
} else{
    console.log("Please enter a valid number");
    
}