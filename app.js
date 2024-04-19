#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "sentences",
    type: "input",
    message: "Enter your sentences to count words: "
});
let words = answer.sentences.trim().split(" ");
console.log(words);
console.log(`your sentences word count is ${words.length}`);
``;
