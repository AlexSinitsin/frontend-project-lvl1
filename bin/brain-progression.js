#!/usr/bin/env node
import { name, getRandomInt, getFinalAnswer, enterAnswer } from '../src/index.js';

const getProgression = () => {
  const arr = [];
  const lengthArr = getRandomInt(10) + 5;
  const randomNumber = getRandomInt(50);
  const randomStap = getRandomInt(10) + 1;
  arr[0] = randomNumber;
  for (let i = 1; i < lengthArr; i += 1) {
    arr.push(arr[i - 1] + randomStap);
  }
  return arr;
};

const formingString = (arrProgression, deletedNumber) => {
  let string = '';
  for (let i = 0; i < arrProgression.length; i += 1) {
    if (arrProgression[i] === deletedNumber) {
      string = `${string} ..`;
    } else {
      string = `${string} ${arrProgression[i]}`;
    }
  }
  console.log(string);
};

const nameBrainGamer = name();
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i += 1) {
  const arrProgression = getProgression();
  const deletedIndex = getRandomInt(arrProgression.length);
  const deletedNumber = arrProgression[deletedIndex];
  formingString(arrProgression, deletedNumber);
  const yourAnswer = enterAnswer();
  const end = getFinalAnswer(deletedNumber, yourAnswer, nameBrainGamer, i);
  if (end) {
    break;
  }
}
