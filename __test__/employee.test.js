const Employee = require('../lib/employee');

test('creates new employee object', () => {
    let engineerOne = new Employee('John', 123, 'john@email.com', 'github.com/something');
});

test('checks if name, email, github is a string', () => {
    let employeeOne = new Employee('John', 123, 'john@email.com', 'github.com/something');

    expect(employeeOne.name).toEqual(expect.any(String));
    expect(employeeOne.email).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    let employeeOne = new Employee('John', 123, 'john@email.com', 'github.com/something');

    expect(employeeOne.id).toEqual(expect.any(Number));
})