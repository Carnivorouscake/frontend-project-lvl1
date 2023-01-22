import getRandomNum from '../utils.js';

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
      throw new Error(`Unknown action: ${action}`);
  }
};

const play = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const action = operators[getRandomNum(0, operators.length - 1)];
    const a = getRandomNum(1, 10);
    const b = getRandomNum(1, 10);
    const question = `${a} ${action} ${b}`;
    const answer = `${calculate(a, action, b)}`;
    const round = [question, answer];
    rounds.push(round);
  }
  runGame(rounds, 'What is the result of the expression?');
};

export default play;
