#!/usr/bin/env node
/* eslint-disable no-inner-declarations */
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import welcome from './index.js';

const name = welcome();
// eslint-disable-next-line no-console
console.log('What is the result of the expression?');
const startRound = () => {
  const getRandomNum = () => Math.round(Math.random() * 100);
  const getAction = () => {
    const act = Math.floor(Math.random() * 3);
    if (act === 0) {
      return '+';
    }
    if (act === 1) {
      return '-';
    }
    if (act === 2) {
      return '*';
    }
  };
  let flag = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const action = getAction();
    const a = getRandomNum();
    const b = getRandomNum();
    const getResult = (a, b, action) => {
      if (action === '+') {
        return a + b;
      }
      if (action === '-') {
        return a - b;
      }
      if (action === '*') {
        return a * b;
      }
    };
    const result = getResult(a, b, action);
    // eslint-disable-next-line no-console
    console.log(`Question: ${a} ${action} ${b}`);
    const answer = readlineSync.question('Your answer:');
    function getAnswer(Sum, answeres) {
      if (Number(answeres) === Sum) {
        // eslint-disable-next-line no-console
        console.log('Correct!');
        return true;
      }
      // eslint-disable-next-line no-alert, no-console
      console.log(`Question:${a} ${action} ${b} \nYour answer: ${answer} \n'${answer}' is wrong answer ;(. Correct answer was '${result}' \nLet's try again, ${name}!`);
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
export default startRound;
