import { getRandomInt } from '../src/index.js';

export default () => {
  const rangeRandomNumber = 50;
  const randomNumberFirs = getRandomInt(rangeRandomNumber);
  const randomNumberSecond = getRandomInt(rangeRandomNumber);
  const randomFlag = getRandomInt(3);
  let answer;
  switch (randomFlag) {
    case 0:
      console.log(`Question: ${randomNumberFirs} + ${randomNumberSecond}`);
      answer = randomNumberFirs + randomNumberSecond;
      break;
    case 1:
      console.log(`Question: ${randomNumberFirs} - ${randomNumberSecond}`);
      answer = randomNumberFirs - randomNumberSecond;
      break;
    default:
      console.log(`Question: ${randomNumberFirs} * ${randomNumberSecond}`);
      answer = randomNumberFirs * randomNumberSecond;
      break;
  }
  return String(answer);
};
