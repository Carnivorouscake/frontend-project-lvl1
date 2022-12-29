// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/extensions
import sayHello from '../src/cli.js';

sayHello(readlineSync);
// eslint-disable-next-line no-console
const getRandomNum = () => Math.round(Math.random() * 100);
// eslint-disable-next-line consistent-return
const getAction = (a, b) => {
  const act = Math.floor(Math.random() * 4);
  if (act === 0) {
    return `${a} + ${b}`;
  }
  if (act === 1) {
    return `${a} - ${b}`;
  }
  if (act === 2) {
    return `${a} * ${b}`;
  }
  if (act === 3) {
    return `${a * b} / ${b}`;
  }
};

const startRound = () => {
  let flag = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const a = getRandomNum();
    const b = getRandomNum();
    const equation = getAction(a, b);
    // eslint-disable-next-line no-eval
    const result = eval(equation);
    // eslint-disable-next-line no-alert
    alert(`Question:  ${equation}`);
    // eslint-disable-next-line no-alert
    const answer = prompt('Your answer:');
    // eslint-disable-next-line no-inner-declarations, no-shadow
    function getAnswer(Sum, answer) {
      if (Number(answer) === Sum) {
        // eslint-disable-next-line no-alert
        alert('Correct!');
        return true;
      }
      // eslint-disable-next-line no-alert
      alert(`Question:${equation} \nYour answer: ${answer} \n'${answer}' is wrong answer ;(. Correct answer was '${result}' \nLet's try again, ${readlineSync}`);
      return false;
    }
    const isCorrect = getAnswer(result, answer);
    if (!isCorrect) {
      flag = true;
      return;
    }
  }
  if (flag === false) {
    // eslint-disable-next-line no-alert
    alert(`Congratulations, ${readlineSync}!`);
  }
};
startRound();
