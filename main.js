const inquirer = require('inquirer');
const generator = require('./utilities/readme-generator');

// Prompts user for required information
function userPrompt() {

    console.log(`
        ===================
        Readme.md Generator
        ===================
    `)

    inquirer.prompt([
        {
            type: "input",
            name: "fileLocation",
            message: "Enter file location example:(./{your-input}/README.md): ",
        },
        {
            type: "input",
            name: "title",
            message: "Enter the project title (Required): ",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter title");
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project (Required): ",
            validate: desInput => {
                if (desInput) {
                    return true;
                } else {
                    console.log("Please enter a description");
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "Enter your installation  instructions (Required): ",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter installation  information");
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Enter your usage information (Required): ",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter usage information");
                }
            }
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter those who have made contributions (Required): ",
            validate: contrInput => {
                if (contrInput) {
                    return true;
                } else {
                    console.log("Please enter contributions");
                }
            }
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
            choices: ["Apache", "MIT", "Eclipse", "GNU", "None"]
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username (Required): ",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter username");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address (Required): ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter email");
                }
            }
        }
    ]).then(data => {
        // runs readme-generator and passing data collected. 
        console.log(data)
        generator(data);
    });
}

userPrompt();