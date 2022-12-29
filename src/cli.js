const sayHello = (readlineSync) => {
  console.log('node bin/brain-games.js \nWelcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
};
export default sayHello;
