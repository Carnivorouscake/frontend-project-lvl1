const sayHello = (readlineSync) => {
  alert('node bin/brain-games.js \nWelcome to the Brain Games!');
  alert('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  alert(`Hello, ${name}`);
};
export default sayHello;
