import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

function play() {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    rounds[i] = [];
    [rounds[i][0], rounds[i][1]] = [`${num}`, `${expectedAnswer}`];
  }

  runGame(rounds, 'Answer "yes" if the number is even, otherwise answer "no".');
}

export default play;
