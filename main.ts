#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("welcome to code with Erum - ATM machine");
let pinAnswer = await inquirer.prompt(
    [
        {
             name: "pin",
             message: "enter your pin code",
             type: "number"
        }
    ]
);
if(pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Successfully!!!");
    //console.log(`Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["withdraw Amount", "check balance"]
            }
        ]
    );

    if(operationAns.operation === "withdraw Amount"){
       let amountAns = await inquirer.prompt(
        [
            {
               name: "amount" ,
               message: "enter the amount to withdraw",
               type: "number"
            }
        ]
       );
       if(amountAns.amount > myBalance){
        console.log("Insufficient Balance");
       }
       else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw successfully`);
        console.log(`Your remaining balance is: ${myBalance}`);
       }
    }else if (operationAns.operation === "check balance") {
        console.log(`Your Account balance is: ${myBalance} `);
    }
}

else{
    console.log("Pin is incorect, Try Again!");
        }