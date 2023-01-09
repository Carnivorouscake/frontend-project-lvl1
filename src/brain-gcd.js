import { startRound } from './utils.js';

import welcome from './index.js';

const getRandomNum = () => Math.round(Math.random() * 100);
const sort = (a, b) => {
  if (a < b) {
  return [a, b];
  }
  return [b, a];
};
const greatestDivisor = (mass) => {
  let first = mass[0];
  let second = mass[1];
  while (true) {
    const temp = second % first;
    if (temp === 0) return first;
    second = first;
    first = temp;
  }
};

function play() {
  const name = welcome();
  const questions = [];
  const answers = [];

for (let i = 0; i < 3; i += 1) {
    const a = getRandomNum();
    const b = getRandomNum();
    const mass = sort(a, b);
    const answer = greatestDivisor(mass);
    answers.push(`${answer}`);
    questions.push(`Question: ${a} ${b}`);
  }
  console.log('Find the greatest common divisor of given numbers.');
  startRound(questions, answers, name);
}
export default play;
