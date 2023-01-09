import welcome from './index.js';

import { startRound } from './utils.js';

function play() {
  const name = welcome();
  const questions = [];
  const answers = [];
  function getRandomNum() {
    return Math.round(Math.random() * 100);
  }
  function isEven(num) {
    if (num % 2 === 0) {
      return 'yes';
      }
    return 'no';
  }
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum()
    questions.push(`Question: ${num}`);
    answers.push(isEven(num));
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startRound(questions, answers, name);
}

export default play;
