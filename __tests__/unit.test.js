// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//isPhoneNumber
test('111-111-1111 is valid', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('(858)111-1111 is valid', () => {
    expect(functions.isPhoneNumber('(858)111-1111')).toBe(true);
});

test('1-1-1 is invalid', () => {
    expect(functions.isPhoneNumber('1-1-1')).toBe(false);
});

test('(858)1-1 is invalid', () => {
    expect(functions.isPhoneNumber('(858)1-1')).toBe(false);
});

//isEmail
test('jjohn@ucsd.edu is valid', () => {
    expect(functions.isEmail('jjohn@ucsd.edu')).toBe(true);
});

test('johnothan@gmail.com is valid', () => {
    expect(functions.isEmail('johnothan@gmail.com')).toBe(true);
});

test('john@ucsd is invalid', () => {
    expect(functions.isEmail('john@ucsd')).toBe(false);
});

test('gmail.com is invalid', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

//isStrongPassword
test('password is valid', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('EXAMPLE is valid', () => {
    expect(functions.isStrongPassword('EXAMPLE')).toBe(true);
});

test('1pass is invalid', () => {
    expect(functions.isStrongPassword('1pass')).toBe(false);
});

test('passwordpassword is invalid', () => {
    expect(functions.isStrongPassword('passwordpassword')).toBe(false);
});

//isDate
test('5/27/2023 is valid', () => {
    expect(functions.isDate('5/27/2023')).toBe(true);
});

test('1/1/2023 is valid', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('1/1/1 is invalid', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
});    

test('1/1 is invalid', () => {
    expect(functions.isDate('1/1')).toBe(false);
});

//isHexColor
test('999 is valid', () => {
    expect(functions.isHexColor('999')).toBe(true);
});

test('999999 is valid', () => {
    expect(functions.isHexColor('999999')).toBe(true);

});

test('111 111 is invalid', () => {
    expect(functions.isHexColor('111 111')).toBe(false);

});

test('1 is invalid', () => {
    expect(functions.isHexColor('1')).toBe(false);

});