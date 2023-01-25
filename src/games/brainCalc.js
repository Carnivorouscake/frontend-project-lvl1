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

const playRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const a = getRandomNum(1, 10);
  const b = getRandomNum(1, 10);
  const question = `${a} ${operator} ${b}`;
  const answer = `${calculate(a, operator, b)}`;
  const round = [question, answer];
  return round;
};

const play = () => {
  const description = 'What is the result of the expression?';
  runGame(description, playRound);
};
export default play;
