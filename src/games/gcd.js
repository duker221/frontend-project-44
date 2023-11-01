import createGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gcdNumber = (numberA, numberB) => {
  let absoluteA = Math.abs(numberA);
  let absoluteB = Math.abs(numberB);

  while (absoluteB) {
    const temp = absoluteB;
    absoluteB = absoluteA % absoluteB;
    absoluteA = temp;
  }

  return absoluteA;
};

const createGameData = () => {
  const numberA = getRandomNumber(0, 100);
  const numberB = getRandomNumber(0, 100);

  const question = `${numberA} ${numberB}`;

  const correctAnswer = String((gcdNumber(numberA, numberB)));

  const gameData = [question, String(correctAnswer)];
  return gameData;
};

const discriptions = 'Find the greatest common divisor of given numbers.';

const startGame = () => createGameEngine(discriptions, createGameData);

export default startGame;
