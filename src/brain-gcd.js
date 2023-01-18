import { getRandomNum } from './utils.js';

import { runGame } from './index.js';

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
  const round = [];

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomNum(1, 20);
    const b = getRandomNum(1, 20);
    const mass = sort(a, b);
    const answer = greatestDivisor(mass);
    round[i] = [];
    round[i].answer = `${answer}`;
    round[i].question = `${a} ${b}`;
  }
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(round, description);
};

export default play;
