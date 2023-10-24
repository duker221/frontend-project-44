import readlineSync from 'readline-sync';

const roundCount = 3;

const mainEngine = (question, createGameData) => {
  console.log('Welcome to the Brain-Games!');

  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello ${userName}`);

  console.log(question);

  const roundStart = (count) => {
    if (count === roundCount) {
      console.log(`Congratulations ${userName}!`);
      return true;
    }

    const roundData = createGameData();
    console.log(`Question: ${roundData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = roundData[1] === userAnswer;
    if (!result) {
      console.log(`"${userAnswer}" is wrong answer :(. Correct answer is "${roundData[1]}".`);
      console.log(`Let's try again ${userName}`);
      return false;
    }
    console.log('Correct!');
    return roundStart(count + 1);
  };

  return roundStart(0);
};

export default mainEngine;
