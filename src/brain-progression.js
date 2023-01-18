import { getRandomNum } from './utils.js';

import { runGame } from './index.js';

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
  const round = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    const step = getRandomNum(1, 9);
    const ethalon = getArrow(num, step);
    const hole = getRandomNum(1, 9);
    const ethalonAnswer = ethalon[hole];
    const str = ethalon.map((x, index) => (index === hole ? '..' : x)).join(' ');
    round[i] = [];
    round[i].question = `${str}`;
    round[i].answer = `${ethalonAnswer}`;
  }
  const description = 'What number is missing in the progression?';
  runGame(round, description);
};
export default play;
