import { getRandomNum } from '../utils.js';

import { runGame } from '../index.js';

const calculate = (a, action, b) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Unknown action!');
  }
};

const play = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];
    const action = arr[getRandomNum(0, arr.length - 1)];
    const a = getRandomNum(1, 10);
    const b = getRandomNum(1, 10);
    rounds[i] = [];
    //деструктуризация по просьбе ментора
    [rounds[i].question, rounds[i].answer] = [`${a} ${action} ${b}`, `${calculate(a, action, b)}`];
  }
  runGame(rounds, 'calc');
};

export default play;
