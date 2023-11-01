import createGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const numIsEven = (num) => num % 2 === 0;

const createGameData = () => {
  const question = getRandomNumber(0, 200);

  const correctAnswer = numIsEven(question) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

const discriptions = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => createGameEngine(discriptions, createGameData);
export default startGame;
