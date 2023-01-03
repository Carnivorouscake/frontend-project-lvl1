#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import welcome from '../src/index.js';

const name = welcome();
// eslint-disable-next-line no-console

const startRound = () => {
  // eslint-disable-next-line no-console
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  function getRandomNum() {
    return Math.round(Math.random() * 100);
  }
  function isEven(num) {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  }

  const correctAnswer = (isEvenString, answer) => {
    if (answer.toLowerCase() === isEvenString) {
    // eslint-disable-next-line no-alert, no-console
      console.log('Correct!');
      return true;
    }
    // eslint-disable-next-line no-alert, no-console
    console.log(`${answer} is wrong answer ;(. Correct answer was ${isEvenString} \nLet's try again, ${name}`);
    return false;
  };

  let flag = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const num = getRandomNum();
    // eslint-disable-next-line no-alert, no-console, no-template-curly-in-string
    console.log(`Question: ${num}`);
    // eslint-disable-next-line no-alert, no-console
    const answer = readlineSync.question('Your answer:');
    const isEvenString = isEven(num);
    const isCorrect = correctAnswer(isEvenString, answer);
    if (!isCorrect) {
      flag = true;
      return;
    }
  }

  if (!flag) {
    // eslint-disable-next-line no-alert, no-template-curly-in-string, no-console
    console.log(`Congratulations, ${name}!`);
  }
};

export default startRound;
