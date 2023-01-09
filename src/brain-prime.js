import {isCorrectAnswer, startRound} from './utils.js';

import welcome from './index.js';

function getRandomNum() {
      return Math.round(Math.random() * 10) + 1;
  }
  const getPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  for (let index = 2; num > index; index += 1) {
    if (num % index === 0) {
      return 'no';
    }    
    return 'yes';
  }
}
function play (){
  const name = welcome();
  let questions = []
  let answers = []
  
  for (let i = 0; i < 3; i += 1) {
     const num = getRandomNum();
      questions.push(`Question: ${num}`)
      answers.push(getPrime(num))
     }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  startRound(questions, answers, name)
};

export default play;
