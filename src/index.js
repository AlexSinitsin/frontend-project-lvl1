import readlineSync from 'readline-sync';

export const engine = (question, func) => {
  console.log('Welcome to the Brain Games!');
  const nameForGamer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameForGamer}`);
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const yourAnswer = func();
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === yourAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${nameForGamer}`);
      }
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameForGamer}!`,
      );
      break;
    }
  }
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
