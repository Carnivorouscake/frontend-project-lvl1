import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const playRound = () => {
  const number = getRandomNum(1, 100);
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  const answer = `${expectedAnswer}`;
  const round = [question, answer];
  return round;
};

const play = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, playRound);
};

export default play;
