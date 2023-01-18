import runGame from './utils.js';

import { isEven } from './utils.js';

function play() {
  const questions = [];
  const answers = [];
  const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    questions.push(`Question: ${num}`);
    answers.push(expectedAnswer);
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  runGame(questions, answers);
}

export default play;
