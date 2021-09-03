const fs = require('fs');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const supportedLanguage = ['en_US', 'fr_FR', 'he_IL'];
let translateLanguage;

const privateMethods = {
    getDay: () => {
        const today = days[new Date().getDay()];
        return translateLanguage[today];
    },
    setDefaultLanguage: () => {
        const rawData = fs.readFileSync(`${__dirname}/language/en_US.json`);
        translateLanguage = JSON.parse(rawData);
    },
};
privateMethods.setDefaultLanguage();

const publicMethods = {
    getSupportedLanguages: () => {
        return supportedLanguage;
    },

    setLanguage: (language) => {
        if (language && supportedLanguage.includes(language)) {
            const rawData = fs.readFileSync(`${__dirname}/language/${language}.json`);
            translateLanguage = JSON.parse(rawData);
        } else {
            throw Error('Not suported language');
        }
    },

    today: () => {
        return privateMethods.getDay();
    },

    todayLowerCase: () => {
        return privateMethods.getDay().toLowerCase();
    },

    todayUpperCase: () => {
        return privateMethods.getDay().toUpperCase();
    },
};

module.exports = publicMethods;
