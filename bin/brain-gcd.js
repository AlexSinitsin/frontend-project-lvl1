#!/usr/bin/env node
import { name, getRandomInt, getFinalAnswer, enterAnswer } from '../src/index.js';

const Divisors = (number) => {
  const arr = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
const largestDivisoe = (firstNumberDivisors, SecondNumberDivisors) => {
  let largestDivisor;
  for (const numberFirstArr of firstNumberDivisors) {
    if (SecondNumberDivisors.includes(numberFirstArr)) {
      largestDivisor = numberFirstArr;
    }
  }
  return largestDivisor;
};

const nameBrainGamer = name();
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 3; i += 1) {
  const randomNumberFirs = getRandomInt(30);
  const randomNumberSecond = getRandomInt(30);
  const firstNumberDivisors = Divisors(randomNumberFirs);
  const SecondNumberDivisors = Divisors(randomNumberSecond);
  const largestDivisor = largestDivisoe(firstNumberDivisors, SecondNumberDivisors);
  console.log(`${randomNumberFirs} ${randomNumberSecond}`);
  const yourAnswer = enterAnswer();
  const end = getFinalAnswer(largestDivisor, yourAnswer, nameBrainGamer, i);
  if (end) {
    break;
  }
};
