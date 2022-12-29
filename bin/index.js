// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

function welcome() {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-console
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}`);
  return name;
}

export default welcome;
