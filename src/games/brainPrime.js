import getRandomNum from '../utils.js';

import { runGame } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let index = 2; number > index; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};
const playRound = () => {
  const number = getRandomNum(1, 100);
  const question = `${number}`;
  let answer = '';
  if (isPrime(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const round = [question, answer];
  return round;
};

const play = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, playRound);
};
export default play;
