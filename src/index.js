import readlineSync from 'readline-sync';

const runGame = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    console.log(`Question: ${rounds[i].question}`);
    const answer = readlineSync.question('Your answer:');

    if (answer.toLowerCase() !== rounds[i].answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rounds[i].answer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export { readlineSync, runGame };
