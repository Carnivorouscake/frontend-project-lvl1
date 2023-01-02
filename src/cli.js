const sayHello = (readlineSync) => {
  // eslint-disable-next-line no-console
  console.log('node bin/brain-games.js \nWelcome to the Brain Games!');
  // eslint-disable-next-line no-console
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}`);
};
export default sayHello;
