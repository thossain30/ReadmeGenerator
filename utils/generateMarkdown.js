// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "IBM":
      return "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
    case "Perl":
      return "https://img.shields.io/badge/License-Perl-0298c3.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";
    case "Perl":
      return "https://opensource.org/licenses/Artistic-2.0";
    default:
      return "";
  }
}

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
${data.contributors}

## Test
${data.test}

## Questions 
If you have any questions, contact ${data.username} on Github, or reach out via email at ${data.email}.

## License
Click [here](${renderLicenseLink(data.license)}) for more information about the license.
![alt text](${renderLicenseBadge(data.license)})
`;
}

module.exports = generateMarkdown;
