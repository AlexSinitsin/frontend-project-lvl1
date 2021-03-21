import readlineSync from 'readline-sync';

export const name = () => {
  console.log('Welcome to the Brain Games!');
  const nameForGamer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameForGamer}`);
  return nameForGamer;
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const even = (nameGamer) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const evenNumber = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (evenNumber === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${nameGamer}`);
      }
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameGamer}!`,
      );

      break;
    }
  }
};

export const calc = (nameGamer) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumberFirs = getRandomInt(30);
    const randomNumberSecond = getRandomInt(30);
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
    const yourAnswer = readlineSync.question('Your answer: ');
    if (String(answer) === yourAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${nameGamer}`);
      }
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameGamer}!`,
      );
      break;
    }
  }
};
