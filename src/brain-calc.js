import runGame from './utils.js';

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

const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));

const play = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];
    const action = arr[getRandomNum(0, 2)];
    const a = getRandomNum(1, 10);
    const b = getRandomNum(1, 10);
    questions.push(`Question: ${a} ${action} ${b}`);
    answers.push(`${calculate(a, action, b)}`);
  }
  console.log('What is the result of the expression?');
  runGame(questions, answers);
};

export default play;
