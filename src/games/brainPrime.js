import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

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
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(1, 100);
    rounds[i] = [];
    rounds[i].question = `${num}`;
    if (isPrime(num)) {
      rounds[i].answer = 'yes';
    } else {
      rounds[i].answer = 'no';
    }
  }
  runGame(rounds, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default play;
