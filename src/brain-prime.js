#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved, import/extensions
import welcome from './index.js';

const name = welcome();

const startRound = () => {
  // eslint-disable-next-line no-console
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // eslint-disable-next-line no-unused-vars
  function getRandomNum() {
 return Math.round(Math.random() * 10);
}
  let flag = false;
  // eslint-disable-next-line no-unreachable-loop, no-plusplus
  for (let i = 0; i < 3; i++) {
    const num = getRandomNum();
    const getPrime = () => {
    // eslint-disable-next-line no-unreachable-loop, no-undef, no-plusplus, no-shadow
      for (let i = 2; num > i; i ++) {
        // eslint-disable-next-line no-undef, eqeqeq
        if (num % i == 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    // eslint-disable-next-line no-unused-vars
    const result = getPrime();
// eslint-disable-next-line no-console
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    // eslint-disable-next-line no-shadow
    const getAnswer = (answer, result) => {
      if (answer === result) {
      // eslint-disable-next-line no-console
        console.log('Correct!');
        return true;
      }
      // eslint-disable-next-line no-console
      console.log(`Question:${num} \nYour answer: ${answer} \n'${answer}' is wrong answer ;(. Correct answer was '${result}' \nLet's try again, ${name}!`);
      return false;
    };
    const isCorrect = getAnswer(answer, result);
    if (!isCorrect) {
      flag = true;
      return;
    }
  }
  if (flag === false) {
    // eslint-disable-next-line no-console
    console.log(`Congratulations, ${name}!`);
  }
};
export default startRound;
