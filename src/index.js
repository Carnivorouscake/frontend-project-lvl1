import readlineSync from 'readline-sync';

function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
const runGame = (round, description) => {
  const name = welcome();
  console.log(description);
  for (let i = 0; i < round.length; i += 1) {
    const quest = round[i].question;
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer:');

    if (answer.toLowerCase() === round[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${round[i].answer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { welcome, readlineSync, runGame };
