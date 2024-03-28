// DONE: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// makes README
function makeREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://opensource.org/licenses/${answers.license})

This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please feel free to reach out to ${answers.email}. You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}

// DONE: Create a function to initialize app
// DONE: Create an array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "How do you use this application?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: "Who contributed in this project?",
      },
      {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((answers) => {
      const readmeContent = makeREADME(answers);
      // DONE: Create a function to write README file
      fs.writeFile("README.md", readmeContent, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("README spawned .");
        }
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();
