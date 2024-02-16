import inquirer from "inquirer";
import chalk from "chalk";
inquirer
    .prompt([
    {
        type: "input",
        name: "Age",
        message: "Enter your age: "
    }
])
    .then((answers) => {
    if (answers.Age > 18) {
        console.log("you are adult");
        console.log(chalk.cyan("congrats budy!"));
    }
    else {
        console.log("your are child");
    }
});
