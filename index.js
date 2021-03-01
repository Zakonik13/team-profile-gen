const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const template = require("./template");

// Where collected data is stored for writing
// employeeArr holds Engineer and Intern data
let employeeArr = [];
let managerArr = [];

// Collects Manager data
function managerData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the Team Manager's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            name: "id",
            type: "input",
            message: "What is the Team Manager's employee ID?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an ID Number.");
                    return false;
                }
            }
        },
        {
            name: "email",
            type: "input",
            message: "What is the Team Manager's email?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an email address.");
                    return false;
                }
            }
        },
        {
            name: "office",
            type: "input",
            message: "What is the Manager's office number?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an office number.");
                    return false;
                }
            }
        }
    ]).then(({name, id, email, office}) => {
        managerArr.push(new Manager(name, id, email, office));
        next();
    });
}

// Collects Engineer data
function engineerData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the engineer's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            name: "id",
            type: "input",
            message: "What is the engineer's employee ID?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an ID Number.");
                    return false;
                }
            }
        },
        {
            name: "email",
            type: "input",
            message: "What is the engineer's email?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an email.");
                    return false;
                }
            }
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter a GitHub username.");
                    return false;
                }
            }
        }
    ]).then(({name, id, email, github}) => {
        employeeArr.push(new Engineer(name, id, email, github));
        next();
    });
}

// Collects Intern data
function internData() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the intern's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            name: "id",
            type: "input",
            message: "What is the intern's employee ID?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an ID Number.");
                    return false;
                }
            }
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's eamil?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter an email.");
                    return false;
                }
            }
        },
        {
            name: "school",
            type: "input",
            message: "What is the intern's school name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("You must enter a school name.");
                    return false;
                }
            }
        }
    ]).then(({name, id, email, school}) => {
        employeeArr.push(new Intern(name, id, email, school));
        next();
    });
}

// Gives user option to add more engineers and interns or end questions
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

// Writes HTML page 
function writeToFile(file, data) {
    fs.writeFileSync(file, data);
}

// Sends questions' data to HTML template page before writing index.html
function teamData() {
    const pageInfo = template(managerArr, employeeArr);
    writeToFile('./dist/index.html', pageInfo);
}

// Initiates questions
managerData();