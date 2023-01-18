import { isEven, getRandomNum } from './utils.js';

import { runGame } from './index.js';

function play() {
  const round = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    round[i] = [];
    round[i].question = `${num}`;
    round[i].answer = `${expectedAnswer}`;
  }
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(round, description);
}

export default play;
