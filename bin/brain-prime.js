#!/usr/bin/env node
import { name, getRandomInt, getFinalAnswer, enterAnswer } from '../src/index.js';

const getAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const nameBrainGamer = name();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomInt(50);
  const answer = getAnswer(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = enterAnswer();
  const end = getFinalAnswer(answer, yourAnswer, nameBrainGamer, i);
  if (end) {
    break;
  }
}
