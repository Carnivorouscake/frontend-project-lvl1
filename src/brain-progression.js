import runGame from './utils.js';

const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));

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
const play = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    const step = getRandomNum(1, 9);
    const ethalon = getArrow(num, step);
    const hole = getRandomNum(1, 10);
    const ethalonAnswer = ethalon[hole];
    const str = ethalon.map((x, index) => (index === hole ? '..' : x)).join(' ');
    questions.push(`Question: ${str}`);
    answers.push(`${ethalonAnswer}`);
  }
  console.log('What number is missing in the progression?');
  runGame(questions, answers);
};
export default play;
