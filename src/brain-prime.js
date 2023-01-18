import { runGame } from './utils.js';

const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let index = 2; num > index; index += 1) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
};
const play = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    questions.push(`Question: ${num}`);
    if (isPrime(num)) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(questions, answers);
};

export default play;
