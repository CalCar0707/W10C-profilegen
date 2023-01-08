const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'manager-name',
        message: 'Please provide the team manager\'s name:'
    },
    {
        type: 'input',
        name: 'employee-id',
        message: 'Please provide the employee ID:'
    },
    {
        type: 'email',
        name: 'email',
        message: 'Please provide the email address:'
    },
    {
        type: 'input',
        name: 'office-num',
        message: 'Please provide the office number:'
    },
    {
        type: 'checkbox',
        name: 'option-menu',
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
        name: 'intgname',
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
