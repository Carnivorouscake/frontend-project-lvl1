import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const getProgression = (number, step, length) => {
  const result = [];
  let item = number;
  for (let index = 0; index < length; index += 1) {
    item += step;
    result.push(item);
  }
  return result;
};
const playRound = () => {
  const length = 10;
  const number = getRandomNum(1, 100);
  const step = getRandomNum(1, 9);
  const progression = getProgression(number, step, length);
  const hole = getRandomNum(1, progression.length - 1);
  const answer = progression[hole].toString();
  const question = progression.map((x, index) => (index === hole ? '..' : x)).join(' ').toString();
  const round = [question, answer];
  return round;
};

const play = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, playRound);
};
export default play;
