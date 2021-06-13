import readlineSync from 'readline-sync';
import getRandomNumber from './utilits.js';

const isEven = (num) => num % 2 === 0;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have to know your name? ', {
    defaultInput: 'Anonymous',
  });

  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let index = 1; index <= 3; index += 1) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations ${userName}!`);
};

export default game;
