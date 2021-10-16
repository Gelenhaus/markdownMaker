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
            name: 'tableOfContents',
            message: 'Give names to your table of contents',
            type: 'input',

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
            name: 'questions',
            message: 'Do you have any questions?',
            type: 'input'
        },

    ])

        .then(function (answer) {
            let des = answer.description;
            let title = answer.title;
            let table = answer.tableOfContents;
            let install = answer.installation;
            let use = answer.usage;
            let lic = answer.license;
            let cont = answer.contribute;
            let instr = answer.testInstructions;
            let ques = answer.questions;
            let theWholeResponse =
                `**${title}**

${table}

*${des}*

${install}

${use}

${lic}

${cont}

${instr}

${ques}`;

            myWritingFunction(theWholeResponse);

        });

}

iPrompt();


