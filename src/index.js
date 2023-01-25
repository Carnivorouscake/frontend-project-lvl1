import readlineSync from 'readline-sync';

const runGame = (description, playRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [currentQuestion, currentAnswer] = playRound();
    console.log(`Question: ${currentQuestion}`);
    const answer = readlineSync.question('Your answer:');

    if (answer.toLowerCase() !== currentAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${currentAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export { readlineSync, runGame };
