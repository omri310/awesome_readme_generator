const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    // Add more prompts for installation, usage, contribution, tests, license, GitHub username, and email address
    // The prompts should match the user stories you provided.
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    // You can either save the content to a file or log it to the console.
    console.log(readmeContent);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });