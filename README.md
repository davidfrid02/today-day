# Project Title

Simple library to get today day.

## Description

When you dont know what day today, use this library.

### Dependencies

- Node.js 4.9.1

### Installing

- npm i today-day

### Executing program

- How to run the program

```
const todayDay = require('today-day')

//Friday
todayDay.today();

//friday
todayDay.todayLowerCase();

//FRIDAY
todayDay.todayUpperCase();

```

- You can choose one of three languages:
  1. en_US
  2. he_IL
  3. fr_FR

```
todayDay.setLanguage('he_IL');

//שישי
todayDay.today();

//["en_US", "fr_FR", "he_IL"]
todayDay.getSupportedLanguages();


```

## Version History

- 1.0.9
  - Added support in Hebrew language
  - Added support in French language
  - Added function to set language
  - Added function to get supported languages
- 1.0.8
  - minor bug fixes
  - README add repository and homepage
