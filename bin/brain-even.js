// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import welcome from './index.js';

const name = welcome();

const getRandomNum = () => Math.round(Math.random() * 100);
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const correctAnswer = (isEvenString, answer) => {
  if (answer.toLowerCase() === isEvenString) {
    // eslint-disable-next-line no-alert, no-console
    console.log('Correct!');
    return true;
  }
  // eslint-disable-next-line no-alert, no-console
  console.log(`${answer} is wrong answer ;(. Correct answer was ${isEvenString} Let's try again, \n ${name}`);
  return false;
};

const startRound = () => {
  let flag = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const num = getRandomNum();
    // eslint-disable-next-line no-alert, no-console
    console.log(num);
    // eslint-disable-next-line no-alert
    const answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');

    const isEvenString = isEven(num);
    const isCorrect = correctAnswer(isEvenString, answer);
    if (!isCorrect) {
      flag = true;
    }
  }

  if (!flag) {
    // eslint-disable-next-line no-alert, no-template-curly-in-string, no-console
    console.log('Congratulations, ${readlineSync}!');
  }
};

startRound();
