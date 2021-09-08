const languages = require('./languages');

const supportedLanguage = ['en_US', 'fr_FR', 'he_IL'];
let translateLanguage = languages.en_US;

const privateMethods = {
    getDay: (dayNumber) => {
        const day = dayNumber !== undefined ? dayNumber : new Date().getDay();
        return translateLanguage[day];
    },

    calculateAddedDays: (number) => {
        return (new Date().getDay() + number) % 7;
    },
};

const publicMethods = {
    getSupportedLanguages: () => {
        return supportedLanguage;
    },

    locale: (language) => {
        if (language && supportedLanguage.includes(language)) {
            translateLanguage = languages[language];
        } else {
            throw Error('Not supported language');
        }
    },

    today: () => {
        return privateMethods.getDay();
    },

    random: () => {
        const randomDay = Math.floor(Math.random() * 6);
        return privateMethods.getDay(randomDay);
    },

    addDays: (number) => {
        let dayAfterAdded;
        if (number !== undefined && !Number.isNaN(number)) {
            let daysToAdd = number;
            if (number < 0) {
                daysToAdd = ((number % 7) + 7) % 7;
            }
            const dayToGet = privateMethods.calculateAddedDays(daysToAdd);
            dayAfterAdded = privateMethods.getDay(dayToGet);
        } else {
            throw Error('Not a number!');
        }
        return dayAfterAdded;
    },
};

module.exports = publicMethods;
if (typeof window !== 'undefined') {
    window.todayDay = publicMethods;
}
