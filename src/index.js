import readlineSync from 'readline-sync';

const mainEngine = (discriptions, createGameData) => {
  console.log('Welcome to the Brain-Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(discriptions);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) { //  Переделал на цикл
    const [question, answer] = createGameData(); //  Сразу деструктуризировал массив

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer :(. Correct answer is "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;
