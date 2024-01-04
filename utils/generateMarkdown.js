// This function generates the content of the README.md file based on user input
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](LICENSE)
This application is covered under the licence
${data.license} 

## Contributors
${data.contributors}

## Tests
${data.testingrequirement}


## Questions
For additional questions, please contact ${data.email}.
GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;