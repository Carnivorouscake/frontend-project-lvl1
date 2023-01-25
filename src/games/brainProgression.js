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
const description = 'What number is missing in the progression?';
const play = () => {
  const length = 10;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(1, 100);
    const step = getRandomNum(1, 9);
    const progression = getProgression(number, step, length);
    const hole = getRandomNum(1, progression.length - 1);
    const progressionAnswer = progression[hole];
    const question = progression.map((x, index) => (index === hole ? '..' : x)).join(' ').toString();
    const answer = `${progressionAnswer}`;
    const round = [question, answer];
    rounds.push(round);
  }
  runGame(rounds, description);
};
export default play;
