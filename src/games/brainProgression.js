import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const getArrow = (num, step, progressionLength) => {
  const result = [];
  let item = num;
  for (let index = 0; index < progressionLength; index += 1) {
    item += step;
    result.push(item);
  }
  return result;
};

const play = () => {
  const progressionLength = 10;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(1, 100);
    const step = getRandomNum(1, 9);
    const progression = getArrow(number, step, progressionLength);
    const hole = getRandomNum(1, progressionLength - 1);
    const progressionAnswer = progression[hole];
    const question = progression.map((x, index) => (index === hole ? '..' : x)).join(' ').toString();
    const answer = `${progressionAnswer}`;
    const round = [question, answer];
    rounds.push(round);
  }
  runGame(rounds, 'What number is missing in the progression?');
};
export default play;
