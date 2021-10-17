const fs = require("fs");
const inquirer = require("inquirer");

const myWritingFunction = require("./generatemd");


let iPrompt = function () {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the title of your project?',
            type: 'input',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            name: 'description',
            message: 'What is this README about?',
            type: 'input',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        {
            name: 'installation',
            message: 'How do you install this?',
            type: 'input',

        },
        {
            name: 'usage',
            message: 'Is there any usage information to add?',
            type: 'input'
        },
        {
            name: 'license',
            message: 'What license is being used?',
            type: 'input'
        },
        {
            name: 'contribute',
            message: 'What are the contributing guidelines?',
            type: 'input'
        },
        {
            name: 'testInstructions',
            message: 'What are the testing instructions?',
            type: 'input'
        },
        {
            name: 'githubName',
            message: 'Please enter your github username for the questions section',
            type: 'input'
        },
        {
            name: 'email',
            message: 'Please enter your email address.',
            type: 'input'
        },

    ])

        .then(function (answer) {
            let des = answer.description;
            let title = answer.title;
            let install = answer.installation;
            let use = answer.usage;
            let lic = answer.license;
            let cont = answer.contribute;
            let instr = answer.testInstructions;
            let github = answer.githubName;
            let emailA = answer.email;
            let theWholeResponse =
                `# ${title}

**Table of Contents**

[Jump to Description](#Description)

[Jump to Installation](#Installation)

[Jump to Use](#Use)

[Jump to Licenses](#Licenses)

[Jump to Contributions](#Contributions)

[Jump to Tests](#Tests)

[Jump to Contact Info](#For-questions-please-contact-me-at-the-email-below!)


=========================================================

## Description

${des}

## Installation

${install}

## Use

${use}

## Licenses

${lic}

## Contributions 

${cont}

## Tests 

${instr}


**For questions please contact me at the email below!**

[${github}](https://github.com/Gelenhaus/markdownMaker)

${emailA}
`;

            myWritingFunction(theWholeResponse);

        });

}

iPrompt();


