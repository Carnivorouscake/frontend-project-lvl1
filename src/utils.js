const getRandomNum = (start, end) => start + Math.round(Math.random() * (end - start));

const isEven = (num) => num % 2 === 0;

export { isEven, getRandomNum };
