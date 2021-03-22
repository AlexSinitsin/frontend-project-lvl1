import readlineSync from 'readline-sync';

export const enterAnswer = () => readlineSync.question('Your answer: ');

export const name = () => {
  console.log('Welcome to the Brain Games!');
  const nameForGamer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameForGamer}`);
  return nameForGamer;
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getFinalAnswer = (answer, yourAnswer, nameGamer, indexСycle) => {
  if (String(answer) === yourAnswer) {
    console.log('Correct!');
    if (indexСycle === 2) {
      console.log(`Congratulations, ${nameGamer}`);
    }
  } else {
    console.log(
      `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameGamer}!`,
    );
    return 1;
  }
  return 0;
};
