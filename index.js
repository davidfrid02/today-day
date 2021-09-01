"use strict";
const fs = require("fs");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const supportedLanguage = ["en_US", "fr_FR", "he_IL"];
let translateLanguage;

const setDefaultLanguage = () => {
  const rawData = fs.readFileSync(`${__dirname}/language/en_US.json`);
  translateLanguage = JSON.parse(rawData);
};
setDefaultLanguage();
const getDay = () => {
  const date = new Date();
  const today = days[date.getDay()];
  return translateLanguage[today];
};

exports.getSupportedLanguages = () => {
  return supportedLanguage;
};

exports.setLanguage = (language) => {
  if (language && supportedLanguage.includes(language)) {
    if (supportedLanguage.includes(language)) {
      const rawData = fs.readFileSync(`${__dirname}/language/${language}.json`);
      translateLanguage = JSON.parse(rawData);
    }
  }
};

exports.today = () => {
  return getDay();
};

exports.todayLowerCase = () => {
  return getDay().toLowerCase();
};

exports.todayUpperCase = () => {
  return getDay().toUpperCase();
};
