import welcome from './index.js';

import {isCorrectAnswer, startRound} from './utils.js';

const getResult = (a, action, b) => {
  if (action === '+') {
    return a + b;
  }
  if (action === '-') {
    return  a - b;
  }
  if (action === '*') {
    return a * b;
  }
}
const getRandomNum = () => Math.round(Math.random() * 100);
  function getAction() {
    const act = Math.floor(Math.random() * 3);
    if (act === 0) {
      return '+';
    }
    if (act === 1) {
      return '-';
    }
    if (act === 2) {
      return '*';
    }
  }
function play (){
  const name = welcome();
  let questions = [];
  let answers = [];

  for (let i = 0; i < 3; i += 1) {
    const action = getAction();
    const a = getRandomNum();
    const b = getRandomNum();
    questions.push(`Question: ${a}${action}${b}`);
    answers.push(`${getResult(a, action, b)}`)
  }
      console.log('What is the result of the expression?');
      startRound(questions, answers, name);
    
};

export default play;
