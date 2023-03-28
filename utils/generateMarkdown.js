// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Project Description
${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.usage}

## Test
${data.test}

## Questions 
If you have any questions, contact ${data.username} on Github, or reach out via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
