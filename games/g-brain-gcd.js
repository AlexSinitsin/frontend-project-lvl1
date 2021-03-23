import { getRandomInt } from '../src/index.js';

const Divisors = (number) => {
  const arr = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
const getlargestDivisor = (firstNumberDivisors, SecondNumberDivisors) => {
  let largestDivisor;
  for (const numberFirstArr of firstNumberDivisors) {
    if (SecondNumberDivisors.includes(numberFirstArr)) {
      largestDivisor = numberFirstArr;
    }
  }
  return largestDivisor;
};

export default () => {
  const rangeRandomNumber = 50;
  const randomNumberFirs = getRandomInt(rangeRandomNumber);
  const randomNumberSecond = getRandomInt(rangeRandomNumber);
  console.log(`Question: ${randomNumberFirs} ${randomNumberSecond}`);
  const firstNumberDivisors = Divisors(randomNumberFirs);
  const SecondNumberDivisors = Divisors(randomNumberSecond);
  const largestDivisor = getlargestDivisor(firstNumberDivisors, SecondNumberDivisors);
  return String(largestDivisor);
};
