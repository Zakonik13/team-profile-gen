const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const template = require("./template");

let employeeArr = [];
let managerArr = [];
// let engineerArr = [];
// let internArr = [];

function managerData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the Team Manager's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the Team Manager's employee ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the Team Manager's email?",
        },
        {
            name: "office",
            type: "input",
            message: "What is the Manager's office number?",
        }
    ]).then(({name, id, email, office}) => {
        
        managerArr.push(new Manager(name, id, email, office));
        next();
    });
}

function engineerData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the engineer's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the engineer's employee ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the engineer's email?",
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
        }
    ]).then(({name, id, email, github}) => {
        employeeArr.push(new Engineer(name, id, email, github));
        next();
    });
}

function internData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the intern's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the intern's employee ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's eamil?",
        },
        {
            name: "school",
            type: "input",
            message: "What is the intern's school name?",
        }
    ]).then(({name, id, email, school}) => {
        employeeArr.push(new Intern(name, id, email, school));
        next();
    });
}

function next() {
    inquirer.prompt([
        {
            name: "addon",
            type: "list",
            message: 'Which would you like to add next? Select complete to end.',
            choices: ["Engineer", "Intern", "Complete"]
        }
    ]).then(answers => {
        if (answers.addon === "Engineer") {
            engineerData();
        } else if (answers.addon === "Intern") {
            internData();
        } else {
            teamData();
        }
    });
}

function writeToFile(file, data) {
    fs.writeFileSync(file, data);
}

function teamData() {
    const pageInfo = template(managerArr, employeeArr);
    writeToFile('./dist/index.html', pageInfo);
}

managerData();