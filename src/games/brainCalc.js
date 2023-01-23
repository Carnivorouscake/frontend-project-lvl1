import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};
const description = 'What is the result of the expression?';
const play = () => {
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNum(0, operators.length - 1)];
    const a = getRandomNum(1, 10);
    const b = getRandomNum(1, 10);
    const question = `${a} ${operator} ${b}`;
    const answer = `${calculate(a, operator, b)}`;
    const round = [question, answer];
    rounds.push(round);
  }
  runGame(rounds, description);
};

export default play;
