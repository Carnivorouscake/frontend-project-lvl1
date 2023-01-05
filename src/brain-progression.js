#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved, import/extensions
import welcome from './index.js';



const startRound = () => {
  const name = welcome();
  // eslint-disable-next-line no-console
  console.log('What number is missing in the progression?');
  const getRandomNum = () => Math.round(Math.random() * 100);
  const getStep = () => Math.round(Math.random() * 10) + 1;
  let flag = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const num = getRandomNum();
    const step = getStep();
    const getArrow = () => {
      const result = [];
      let i = 0;
      let item = num;
      while (i < 10) {
        i += 1;
        item += step;
        result.push(item);
      }
      return result;
    };
    const ethalon = getArrow();
    const hole = Math.round(Math.random() * 10);
    // eslint-disable-next-line no-unused-vars
    const ethalonAnswer = ethalon[hole];
// eslint-disable-next-line no-unused-vars
    const str = ethalon.map((x, i) => (i === hole ? '..' : x)).join(' ');
    // eslint-disable-next-line no-console
    console.log(`Question: ${str}`);
    // eslint-disable-next-line no-alert
    const answer = readlineSync.question('Your answer:');
    // eslint-disable-next-line no-inner-declarations, no-shadow, no-loop-func
    function getAnswer(Sum, answer) {
      if (Number(answer) === Sum) {
        // eslint-disable-next-line no-alert, no-console
        console.log('Correct!');
        return true;
      }
      // eslint-disable-next-line no-alert, no-console
      console.log(`Question:${str} \nYour answer: ${answer} \n'${answer}' is wrong answer ;(. Correct answer was '${ethalonAnswer}' \nLet's try again, ${name}!`);
      return false;
    }
    const isCorrect = getAnswer(ethalonAnswer, answer);
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
