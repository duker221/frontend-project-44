import createGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (start, step, maxLength) => {
  const result = [];
  for (let i = start; ; i += step) {
    result.push(i);
    if (result.length > maxLength) {
      break;
    }
  }
  return result;
};

const createGameData = () => {
  const start = getRandomNumber(1, 60);
  const step = getRandomNumber(2, 5);
  const maxLength = getRandomNumber(5, 11);
  const progression = generateProgression(start, step, maxLength);

  const hiddenIndex = getRandomNumber(0, maxLength - 1);
  const hiddenValue = progression[hiddenIndex];

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenValue.toString();
  const gameData = [question, correctAnswer];
  return gameData;
};

const discriptions = 'What number is missing in the progression?';

const startGame = () => createGameEngine(discriptions, createGameData);
export default startGame;
