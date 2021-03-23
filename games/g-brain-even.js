import { getRandomInt } from '../src/index.js';

export default () => {
  const rangeRandomNumber = 50;
  const randomNumber = getRandomInt(rangeRandomNumber);
  console.log(`Question: ${randomNumber}`);
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
