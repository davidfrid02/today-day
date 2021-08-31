const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const getDay = () => {
  return days[date.getDay()];
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
