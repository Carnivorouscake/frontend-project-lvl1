import { getRandomNum } from './utils.js';

import { runGame } from './index.js';

const calculate = (a, action, b) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};


const play = () => {
  // const questions = [];
  // const answers = [];
  const round = [];

  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];
    const action = arr[getRandomNum(0, 2)];
    const a = getRandomNum(1, 10);
    const b = getRandomNum(1, 10);
    round[i] = [];
    round[i].question = `${a} ${action} ${b}`;
    round[i].answer = `${calculate(a, action, b)}`;
  }
  const description = 'What is the result of the expression?';
  runGame(round, description);
};

export default play;
