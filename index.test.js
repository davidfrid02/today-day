const todayDay = require('.');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


describe('Test supported languages', () => {
    const supportedLanguages = todayDay.getSupportedLanguages();
    test('Check if supported languages equals to 3', () => {
        expect(supportedLanguages.length).toBe(3);
    });
    test('Check if array not includes de', () => {
        expect(supportedLanguages).toEqual(expect.not.arrayContaining(['de']));
    });
});

// describe('Test set language', () => {
//     test('Check if set language he_IL', () => {
//         expect(todayDay.setLanguage('en_US')).toBe(undefined);
//     });
//     test('Check if a set of no supported language throw error', () => {
//         expect(() => todayDay.setLanguage('heasd')).toThrow(Error);
//     });
// });

// describe('Test today functions', () => {
//     test('Check if get today normal', () => {
//         expect(todayDay.today()).toBe(days[new Date().getDay()]);
//     });

// 	test('Check if get today upperCase', () => {
//         expect(todayDay.todayUpperCase()).toBe(days[new Date().getDay()].toUpperCase());
//     });

// 	test('Check if get today lowerCase', () => {
//         expect(todayDay.todayLowerCase()).toBe(days[new Date().getDay()].toLowerCase());
//     });
// });
