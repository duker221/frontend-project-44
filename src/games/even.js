import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const numIsEven = (num) => num % 2 === 0;

const createGameData = () => {
  const question = getRandomNumber(0, 200);

  const answer = numIsEven(question) ? 'yes' : 'no';
  const gameData = [question, answer];
  return gameData;
};

const discriptions = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => mainEngine(discriptions, createGameData);
export default startGame;
