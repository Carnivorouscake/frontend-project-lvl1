import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

function play() {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(1, 100);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    const answer = `${expectedAnswer}`;
    const round = [question, answer];
    rounds.push(round);
  }

  runGame(rounds, 'Answer "yes" if the number is even, otherwise answer "no".');
}

export default play;
