import readlineSync from 'readline-sync';

const runGame = (rounds, gameName) => {

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const description = [];
  description.calc = 'What is the result of the expression?';
  description.even = 'Answer "yes" if the number is even, otherwise answer "no".';
  description.gcd = 'Find the greatest common divisor of given numbers.';
  description.prime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  description.progression = 'What number is missing in the progression?';
  console.log(description[gameName]);

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
