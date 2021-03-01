const Engineer = require('../lib/engineer');

test('creates new engineer object', () => {
    let engineerOne = new Engineer('John', 123, 'john@email.com', 'github.com/something');
});

test('checks if name, email, github is a string', () => {
    let engineerOne = new Engineer('John', 123, 'john@email.com', 'github.com/something');

    expect(engineerOne.name).toEqual(expect.any(String));
    expect(engineerOne.email).toEqual(expect.any(String));
    expect(engineerOne.github).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    let engineerOne = new Engineer('John', 123, 'john@email.com', 'github.com/something');

    expect(engineerOne.id).toEqual(expect.any(Number));
})