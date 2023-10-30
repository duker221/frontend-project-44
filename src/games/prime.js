import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const numberIsPrime = (number) => {
  if (number === 1 || number === 0) {
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
  const answer = numberIsPrime(question) ? 'yes' : 'no';

  const gameData = [question, answer];

  return gameData;
};

const discriptions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;
