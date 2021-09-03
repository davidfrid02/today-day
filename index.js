const fs = require('fs');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const supportedLanguage = ['en_US', 'fr_FR', 'he_IL'];
let translateLanguage;

const privateMethods = {
    getDay: (dayNumber) => {
        const day = dayNumber !== undefined ? dayNumber : new Date().getDay();
        const today = days[day];
        return translateLanguage[today];
    },
    setDefaultLanguage: () => {
        const rawData = fs.readFileSync(`${__dirname}/language/en_US.json`);
        translateLanguage = JSON.parse(rawData);
    },

    addDays: (number) => {
        return (new Date().getDay() + number) % 7;
    },

    calculateDaysToAdd: (number) => {
        const numberAbs = Math.abs(number);
        const numberAbsTimesInSeven = Math.floor(numberAbs / 7) + 1;
        return numberAbsTimesInSeven * 7 + number;
    },
};
privateMethods.setDefaultLanguage();

const publicMethods = {
    getSupportedLanguages: () => {
        return supportedLanguage;
    },

    locale: (language) => {
        if (language && supportedLanguage.includes(language)) {
            const rawData = fs.readFileSync(`${__dirname}/language/${language}.json`);
            translateLanguage = JSON.parse(rawData);
        } else {
            throw Error('Not supported language');
        }
    },

    today: () => {
        return privateMethods.getDay();
    },

    random: () => {
        const randomNumber = Math.floor(Math.random() * 6);
        return privateMethods.getDay(randomNumber);
    },

    addDays: (_number) => {
        let todayAddDays;
        if (_number !== undefined && !Number.isNaN(_number)) {
            let number = _number;
            if (number < 0) {
                number = privateMethods.calculateDaysToAdd(number);
            }
            const dayAfterAddedDays = privateMethods.addDays(number);
            todayAddDays = privateMethods.getDay(dayAfterAddedDays);
        } else {
            throw Error('Not a number');
        }
        return todayAddDays;
    },
};

module.exports = publicMethods;
