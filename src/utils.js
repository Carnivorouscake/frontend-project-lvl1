import { welcome, readlineSync } from './index.js';

const isEven = (num) => num % 2 === 0;
const runGame = (questions, answers) => {
  const name = welcome();
  for (let i = 0; i < questions.length; i += 1) {
    const quest = questions[i];
    console.log(quest);
    const answer = readlineSync.question('Your answer:');

    if (answer.toLowerCase() === answers[i]) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answers[i]}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { isEven, runGame };
