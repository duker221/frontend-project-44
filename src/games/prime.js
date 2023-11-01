import createGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  } if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const createGameData = () => {
  const question = getRandomNumber(0, 200);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  const gameData = [question, correctAnswer];

  return gameData;
};

const discriptions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => createGameEngine(discriptions, createGameData);

export default startGame;
