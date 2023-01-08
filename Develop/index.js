//link to external apps
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');



const questions = [
    {
        type: 'input',
        name: 'managername',
        message: 'Please provide the team manager\'s name:'
    },
    {
        type: 'input',
        name: 'employeeid',
        message: 'Please provide the employee ID:'
    },
    {
        type: 'email',
        name: 'email',
        message: 'Please provide the email address:'
    },
    {
        type: 'input',
        name: 'officenum',
        message: 'Please provide the office number:'
    },
    {
        type: 'checkbox',
        name: 'optionmenu',
        message: 'What would you like to do next?',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building my team']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engname',
        message: 'Please provide the name of the engineer:',
    },
    {
        type: 'input',
        name: 'engid',
        message: 'Please provide the engineer\'s ID'
    },
    {
        type: 'email',
        name: 'engemail',
        message: 'Please provide the engineer\'s email:'
    },
    {
        type: 'input',
        name: 'enggithub',
        message: 'Please provide the engineer\'s Github username:'
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'intname',
        message: 'Please provide the name of the intern:',
    },
    {
        type: 'input',
        name: 'intid',
        message: 'Please provide the intern\'s ID'
    },
    {
        type: 'email',
        name: 'intemail',
        message: 'Please provide the intern\'s email:'
    },
    {
        type: 'input',
        name: 'intschool',
        message: 'Please provide the intern\'s school:'
    }
];


inquirer.prompt(questions)
.then((response) => {
    fs.writeFile('index.html', generateHtml(response), () => {
        
    if( `${response.optionmenu}` === 'Add an engineer'){
        inquirer.prompt(engineerQuestions)
        .then((response) => {
            fs.appendFile('index.html', generateHtml(response), () => {
                return inquirer.prompt(questions[4]);
            })
        })
        // continues with either engineer or intern questions first time, does not loop
    } else if( `${response.optionmenu}` === 'Add an intern'){
        inquirer.prompt(internQuestions)
        .then((response) => {
            fs.appendFile('index.html', generateHtml(response), () => {
                return inquirer.prompt(questions[4]);
                //return err
                //? console.error(err)
                //: console.log('File written successfully!')
            })
        })
    } else { 
        return console.log('You have finished building your team!');

    }
})
});