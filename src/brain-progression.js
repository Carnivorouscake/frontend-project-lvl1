import {isCorrectAnswer, startRound} from './utils.js';

import welcome from './index.js';

const getRandomNum = () => Math.round(Math.random() * 100);
const getStep = () => Math.round(Math.random() * 10) + 1;

const getArrow = (num, step) => {
  const result = [];
  let index = 0;
  let item = num;
  while (index < 10) {
    index += 1;
    item += step;
    result.push(item);
  }
  return result;
};
function play(){
  const name = welcome();
  let questions = [];
  let answers = [];
  for(let i = 0; i < 3; i += 1) {
    const num = getRandomNum();
    const step = getStep();
    const ethalon = getArrow(num, step);
    const hole = Math.round(Math.random() * 10);
    const ethalonAnswer = ethalon[hole];
    const str = ethalon.map((x, index) => (index === hole ? '..' : x)).join(' ');
  questions.push(`Question: ${str}`);
  answers.push(`${ethalonAnswer}`);
  }
  console.log('What number is missing in the progression?')
  startRound(questions, answers, name);
};

export default play;
