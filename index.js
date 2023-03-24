// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

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
function init() {}

// Function call to initialize app
init();
