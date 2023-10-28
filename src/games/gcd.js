import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

const commonDivisor = (numberA, numberB) => {
  if (numberA === 0 || numberB === 0) {
    return [1];
  }

  const arr = [];

  for (let i = 1; i < numberA; i += 1) {
    if (numberA % i === 0 && numberB % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

const createGameData = () => {
  const numberA = getRandomNumber(0, 100);
  const numberB = getRandomNumber(0, 100);

  const question = `${numberA} ${numberB}`;

  const answer = String(getMaxOfArray(commonDivisor(numberA, numberB)));

  const gameData = [question, String(answer)];
  return gameData;
};

const discriptions = 'Find the greatest common divisor of given numbers.';

const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;
