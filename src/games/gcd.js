import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

const commonDivisor = (numberA, numberB) => {
  const absoluteA = Math.abs(numberA);
  const absoluteB = Math.abs(numberB);

  if (absoluteA === 0 || absoluteB === 0) {
    return [1];
  }

  const cycleLength = Math.max(absoluteA, absoluteB);

  const arr = [];
  for (let i = 1; i <= cycleLength; i += 1) {
    if (absoluteA % i === 0 && absoluteB % i === 0) {
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
