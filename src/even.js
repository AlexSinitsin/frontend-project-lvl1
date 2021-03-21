import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(30));

export default (name) => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
		const randomNumber = getRandomInt();
		console.log(`Question: ${randomNumber}`);
		const answer = readlineSync.question("Your answer: ");
		const even = randomNumber % 2 === 0 ? "yes" : "no";
		if (even === answer) {
			console.log("Correct!");
			if (i === 2) {
				console.log(`Congratulations, ${name}`);
			}
		} else {
			console.log(
				`'yes' is wrong answer ;(. Correct answer was 'no'./nLet's try again, ${name}!`
			);
			break;
		}
	}
};
