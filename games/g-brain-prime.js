import { getRandomInt } from '../src/index.js';

export default () => {
  const randomNumber = getRandomInt(50);
  console.log(`Question: ${randomNumber}`);
  if (randomNumber < 2) {
    return 'no';
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) return 'no';
  }
  return 'yes';
};
