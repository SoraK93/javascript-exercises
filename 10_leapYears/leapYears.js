const leapYears = function (year) {
  // year / 4 & 400
  // ! year / 100
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy400 = year % 400 === 0;
  const notDivisibleBy100 = year % 100 !== 0;
  return divisibleBy400 || (divisibleBy4 && notDivisibleBy100);
};

// Do not edit below this line
module.exports = leapYears;
