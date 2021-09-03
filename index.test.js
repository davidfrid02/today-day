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

describe('Test locale', () => {
    test('Check locale set', () => {
        expect(todayDay.locale('he_IL')).toBe(undefined);
        expect(todayDay.locale('fr_FR')).toBe(undefined);
        expect(todayDay.locale('en_US')).toBe(undefined);
    });
    test('Check if a locale get no supported language', () => {
        expect(() => todayDay.locale('gt_RA')).toThrow(Error);
    });
});

describe('Test today functions', () => {
    test('Check if get today normal', () => {
        expect(todayDay.today()).toBe(days[new Date().getDay()]);
    });
    test('Check random day', () => {
        global.Math.floor = () => 1;
        expect(todayDay.random()).toMatch('Monday');
        global.Math.floor = () => 3;
        expect(todayDay.random()).toMatch('Wednesday');
        global.Math.floor = () => 5;
        expect(todayDay.random()).toMatch('Friday');
        expect(todayDay.random()).not.toMatch('Wednesday');
    });
    test('Check add days to day', () => {
        //02/09/2021 - Thursday
        const mockDate = new Date(1630530000000);
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
        expect(todayDay.addDays(1)).toMatch('Friday');
        expect(todayDay.addDays(58)).toMatch('Saturday');
        expect(todayDay.addDays(11)).toMatch('Monday');
        expect(todayDay.addDays(11)).not.toMatch('Tuesday');
    });

    test('Check substract days from day', () => {
        //02/09/2021 - Thursday
        const mockDate = new Date(1630530000000);
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
        expect(todayDay.addDays(-5)).toMatch('Saturday');
        expect(todayDay.addDays(-13)).toMatch('Friday');
        expect(todayDay.addDays(-29)).toMatch('Wednesday');
        expect(todayDay.addDays(-29)).not.toMatch('Sunday');
    });
});
