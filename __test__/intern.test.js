const Intern = require('../lib/intern');

test('creates new intern object', () => {
    let internOne = new Intern('John', 123, 'john@email.com', 'school name');
});

test('checks if name, email, school is a string', () => {
    let internOne = new Intern('John', 123, 'john@email.com', 'school name');

    expect(internOne.name).toEqual(expect.any(String));
    expect(internOne.email).toEqual(expect.any(String));
    expect(internOne.school).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    let internOne = new Intern('John', 123, 'john@email.com', 'school name');

    expect(internOne.id).toEqual(expect.any(Number));
})