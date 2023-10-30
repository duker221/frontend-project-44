import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

const commonDivisor = (numberA, numberB) => {
  numberA = Math.abs(numberA);
  numberB = Math.abs(numberB);

  if (numberA === 0 || numberB === 0) {
    return [1];
  }

  const cycleLength = Math.max(numberA, numberB);

  const arr = [];

  for (let i = 1; i <= cycleLength; i += 1) {
    if (numberA % i === 0 && numberB % i === 0) {
      arr.push(i);
    }
  }
  return getMaxOfArray(arr);
};

const createGameData = () => {
  const numberA = getRandomNumber(0, 100);
  const numberB = getRandomNumber(0, 100);

  const question = `${numberA} ${numberB}`;

  const answer = String((commonDivisor(numberA, numberB)));

  const gameData = [question, String(answer)];
  return gameData;
};

const discriptions = 'Find the greatest common divisor of given numbers.';

const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;
