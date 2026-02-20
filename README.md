# today-day 📅

[![npm version](https://img.shields.io/npm/v/today-day.svg)](https://www.npmjs.com/package/today-day)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple, lightweight JavaScript library to quickly get the current day of the week, calculate future or past days, and generate random days. 

Whether you are working in Node.js or directly in the browser, `today-day` comes with built-in Internationalization (i18n) support, so you can easily localize your days without pulling in a massive date-formatting library like Moment.js.

---

## ✨ Features

- **Lightweight & Fast:** Get the day of the week instantly without heavy date manipulation overhead.
- **Time Travel:** Easily add or subtract days to find out what day it will be in the future or was in the past.
- **Built-in i18n:** Native support for English (`en_US`), Hebrew (`he_IL`), and French (`fr_FR`).
- **Universal:** Works seamlessly in Node.js (v4.9.1+) and directly in the browser via CDN.
- **Fully Tested:** Backed by Jest to ensure rock-solid reliability.

---

## 📦 Installation

**Using npm:**
```bash
npm install today-day
```

**Using a CDN (Browser):**
```html
<script src="[https://cdn.jsdelivr.net/npm/today-day@1.5.1/dist/today-day.min.js](https://cdn.jsdelivr.net/npm/today-day@1.5.1/dist/today-day.min.js)"></script>
```

---

## 🚀 Quick Start & API

### Basic Usage

```javascript
const todayDay = require('today-day');

// Get the current day
console.log(todayDay.today()); 
// => "Friday"

// Get a completely random day of the week
console.log(todayDay.random()); 
// => "Monday"
```

### Adding & Subtracting Days
Need to know what day it will be in 4 days, or what day it was 29 days ago?

```javascript
// 4 days from today
console.log(todayDay.addDays(4)); 
// => "Tuesday"

// 29 days ago
console.log(todayDay.addDays(-29)); 
// => "Wednesday"
```

### Localization (i18n)
Easily switch between supported languages.

```javascript
// Set language to Hebrew
todayDay.locale('he_IL');

// Get today's day in Hebrew
console.log(todayDay.today()); 
// => "שישי"

// See all currently supported language codes
console.log(todayDay.getSupportedLanguages()); 
// => ["en_US", "fr_FR", "he_IL"]
```

---

## 🧪 Testing

This project uses Jest for testing. To run the test suite locally:

```bash
npm run test
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the project.
2. Clone your fork.
3. Install dependencies: `npm install`
4. Make your changes and write tests if applicable.
5. Ensure tests pass: `npm run test`
6. Create a Pull Request!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.