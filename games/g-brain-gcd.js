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
  let lengthArr = firstNumberDivisors.length;
  for (let i = 0; i < lengthArr; i += 1) {
    if (SecondNumberDivisors.includes(firstNumberDivisors[i])) {
      largestDivisor = numberFirstArr;
    }
  }
  return largestDivisor;
};

export default () => {
  const rangeRandomNumber = 50;
  const randomNumberFirs = getRandomInt(rangeRandomNumber + 1);
  const randomNumberSecond = getRandomInt(rangeRandomNumber + 1);
  console.log(`Question: ${randomNumberFirs} ${randomNumberSecond}`);
  const firstNumberDivisors = Divisors(randomNumberFirs);
  const SecondNumberDivisors = Divisors(randomNumberSecond);
  const largestDivisor = getlargestDivisor(
    firstNumberDivisors,
    SecondNumberDivisors,
  );
  return String(largestDivisor);
};
