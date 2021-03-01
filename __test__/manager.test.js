const Manager = require('../lib/manager');

test('creates new manager object', () => {
    let managerOne = new Manager('John', 123, 'john@email.com', '1A');
});

test('checks if name is a string', () => {
    let managerOne = new Manager('John', 123, 'john@email.com', '1A');

    expect(managerOne.name).toEqual(expect.any(String));
});

test('checks if id is a number', () => {
    let managerOne = new Manager('John', 123, 'john@email.com', '1A');

    expect(managerOne.id).toEqual(expect.any(Number));
})