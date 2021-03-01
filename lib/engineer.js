const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return this.constructor.name;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;