//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'Eclipse Public License 1.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'file',
        message: 'Please name file "README".',
      },
];

//Function for users input to tobe returned as answers
function userInput() {
    return inquirer.prompt(questions);
}

//Created a function to write README file
function writeToFile(file, data) {
    fs.writeFile(`${file}.md`, data, (err) => {
        err ? console.log(err) : console.log(`Your file, ${file}.md, was successfully generated!`);
    })
}

//Created a function to initialize app
async function init() {
    let userAnswers = await userInput();
    writeToFile((userAnswers.file), (generateMarkdown(userAnswers)))
}

//Function call to initialize app
init();
