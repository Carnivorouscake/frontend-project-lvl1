import runGame from './utils.js';

const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));
const sort = (a, b) => {
  if (a < b) {
    return [a, b];
  }
  return [b, a];
};
const greatestDivisor = (mass) => {
  let first = mass[0];
  let second = mass[1];

  let temp;
  do {
    temp = second % first;
    second = first;
    first = temp;
  } while (temp !== 0);
  return second;
};

const play = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomNum(1, 20);
    const b = getRandomNum(1, 20);
    const mass = sort(a, b);
    const answer = greatestDivisor(mass);
    answers.push(`${answer}`);
    questions.push(`Question: ${a} ${b}`);
  }
  console.log('Find the greatest common divisor of given numbers.');
  runGame(questions, answers);
};
export default play;
