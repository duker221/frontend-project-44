import mainEngine from '../index.js';

const numIsEven = (num) => num % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const createGameData = () => {
  const question = getRandomInt(200);

  const answer = numIsEven(question) ? 'yes' : 'no';
  const gameData = [question, answer];
  return gameData;
};

const discriptions = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => mainEngine(discriptions, createGameData);
export default startGame;
