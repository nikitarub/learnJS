const adminName = require('./variablesUsage');

test('test adminName result to be Василий', () => {
    const admin = adminName();
    const expected = 'Василий';
    expect(admin).toEqual(expected);
});
