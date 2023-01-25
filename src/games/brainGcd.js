import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

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

const playRound = () => {
  const a = getRandomNum(1, 20);
  const b = getRandomNum(1, 20);
  const array = sort(a, b);
  const answer = greatestDivisor(array).toString();
  const question = `${a} ${b}`;
  const round = [question, answer];
  return round;
};

const play = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, playRound);
};

export default play;
