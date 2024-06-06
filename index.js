#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: Who is the president of pakistan?",
        choices: ["Asif Ali Zardari", "Nawaz Sahrif", "Bilawal Bhooto",]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: Who is the founder of pakistan?",
        choices: ["Alama Iqbal", "Muhammad Ali Jinha", "Fatima Jinha",]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: What is Pakistan's official name?",
        choices: ["The Islamic Republic of Pakistan", "India", "Pakistan",]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4: What's Pakistan's official language?",
        choices: ["Urdu", "punjabi", "hindi",]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:What is the capital of Pakistan? ",
        choices: ["lahore", "islamabad", "punjab",]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Asif Ali Zardari":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect!");
}
switch (quiz.question_2) {
    case "Muhammad Ali Jinha":
        console.log("2.Correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect!");
}
switch (quiz.question_3) {
    case "The Islamic Republic of Pakistan":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect!");
}
switch (quiz.question_4) {
    case "Urdu":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect!");
}
switch (quiz.question_5) {
    case "islamabad":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect!");
}
console.log(`score: ${score}`);
