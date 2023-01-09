import readlineSync, {question} from 'readline-sync';

function isCorrectAnswer(isEvenString, answer, name) {
  if (answer.toLowerCase() === isEvenString) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${isEvenString} \nLet's try again, ${name}!`);
  return false;
}
const startRound = (questions, answers, name) => {
  let flag = false;
  for (let i = 0; i < questions.length; i += 1) {
    const quest = questions[i];
    console.log(quest);
    const answer = readlineSync.question('Your answer:');
    const isCorrect = isCorrectAnswer(answers[i], answer, name);
    if (!isCorrect) {
      flag = true;
      return;
    }
  }
  if (!flag) {
    console.log(`Congratulations, ${name}!`);
  }
};
export {isCorrectAnswer, startRound};