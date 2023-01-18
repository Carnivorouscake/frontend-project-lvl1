import { getRandomNum } from './utils.js';

import { runGame } from './index.js';

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
  const round = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    round[i] = [];
    round[i].question = `${num}`;
    if (isPrime(num)) {
      round[i].answer = 'yes';
    } else {
      round[i].answer = 'no';
    }
  }
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(round, description);
};

export default play;
