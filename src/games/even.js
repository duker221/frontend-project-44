import mainEngine from '../index.js';

const numIsEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => {
  const random = Math.floor(min + Math.random() * Math.floor(max));
  return random;
};

const createGameData = () => {
  const question = getRandomNumber(1, 50);

  const answer = numIsEven(question) ? 'yes' : 'no';
  const gameData = [question, answer];
  return gameData;
};

const discriptions = 'Answer "yes" if the number is even, otherwise answer "no"';


const startGame = () => mainEngine(discriptions, createGameData);
export default startGame;
