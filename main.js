const inquirer = require('inquirer');

function userPrompt() {

    console.log(`
        ===================
        Readme.md Generator
        ===================
    `)

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the project title: "
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project: "
        },
        {
            type: "input",
            name: "install",
            message: "Enter your installition instructions: "
        },
        {
            type: "input",
            name: "usage",
            message: "Enter your usage information: "
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter those who have made contributions: "
        },
        {
            type: "input",
            name: "test",
            message: "Enter tests applied to application: "
        },
        {
            type: "list",
            name: "license",
            message: "Select the license for this application",
            choices: ["Apache","MIT", "Eclipse public","GNU general"]
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address: "
        }
    ]).then(data => {
        console.log(data);
    });
}

userPrompt();