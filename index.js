const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs")
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

    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage of your project:',
    },

    {
      type: 'input',
      name: 'contributors',
      message: 'Enter the contributors of your project:',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation of your project:',
    },

    {
      type: 'input',
      name: 'testingrequirement',
      message: 'Enter the testingrequirement of your project:',
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter the github username of your project:',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Enter the email of your project:',
    },

    {
      type: 'list',
      name: 'license',
      choices: ['MIT','ISC','GPL','APACHE','NONE'],
      message: 'Enter the licence of your project:',
    }
    // Add more prompts for installation, usage, contribution, tests, license, GitHub username, and email address
    // The prompts should match the user stories you provided.
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    // You can either save the content to a file or log it to the console.
    console.log(readmeContent);
    return readmeContent
  }).then(data =>{
    fs.writeFileSync("README.md",data, (err) => {
      if(err) throw err;
    })
  }
  )
  .catch((error) => {
    console.error('Error occurred:', error);
  });