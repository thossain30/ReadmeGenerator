// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your Project title?",
        name: "title",
        default: "Readme Generator"
    },
    {
        type: "input",
        message: "What is your repo called?",
        name: "repo",
        default: "ReadmeGenerator"
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "desc",
        default: "This application will generate a README.md file for your current project."
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
        default: "Step 1: Run npm install and Step 2: Run node index.js"
    },
    {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage",
        default: `1. Run node index.js 
                  2.Answers the questions 
                  3.The README.md file will be created.`
    },
    {
        type: "input",
        message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
        name: "contributors"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license to use.",
        choices: [
            "Apache",
            "IBM",
            "MIT",
            "Perl"
        ],
        name: "license"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Success, the README file has been written")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const gitUsername = `https://api.github.com/users/${answers.username}`
        const readme = generateMarkdown(answers);
        writeToFile("README.md", readme);
    })
}

// Function call to initialize app
init();
