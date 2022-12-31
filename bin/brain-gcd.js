// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved, import/extensions
import welcome from './index.js';

// eslint-disable-next-line no-unused-vars
const name = welcome();

// eslint-disable-next-line no-console
console.log('Find the greatest common divisor of given numbers.');
const getRandomNum = () => Math.round(Math.random() * 100);
// eslint-disable-next-line no-shadow, no-unused-vars

const startRound = () => {
  let flag = false;
  for (let i = 0; i < 3; i++) {
    const a = getRandomNum();
    const b = getRandomNum();
    // eslint-disable-next-line no-shadow
    const sort = (a, b) => {
      if (a < b) {
        return [a, b];
      }
      return [b, a];
    };
    // eslint-disable-next-line no-unused-vars
    const mass = sort(a, b);
    // eslint-disable-next-line no-shadow
    const greatestDivisor = (mass) => {
      let first = mass[0];
      let second = mass[1];
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const temp = second % first;
        if (temp === 0) return first;
        second = first;
        first = temp;
      }
    };
    const result = greatestDivisor(mass);
    // eslint-disable-next-line no-console
    console.log(`Question: ${a} ${b}`);
    // eslint-disable-next-line no-undef
    const answer = readlineSync.question('Your answer:');
    // eslint-disable-next-line no-inner-declarations, no-shadow
    function getAnswer(result, answer) {
      if (Number(answer) === result) {
        // eslint-disable-next-line no-alert, no-console
        console.log('Correct!');
        return true;
      }
      // eslint-disable-next-line no-alert, no-console
      console.log(`Question:${a} ${b} \nYour answer: ${answer} \n'${answer}' is wrong answer ;(. Correct answer was '${result}' \nLet's try again, ${name}`);
      return false;
    }
    const isCorrect = getAnswer(result, answer);
    if (!isCorrect) {
      flag = true;
      return;
    }
  }
  if (flag === false) {
    // eslint-disable-next-line no-alert, no-console
    console.log(`Congratulations, ${name}!`);
  }
};
startRound();
