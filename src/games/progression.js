import mainEngine from '../index.js';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
  const start = getRandomArbitrary(1, 60);
  const step = getRandomArbitrary(2, 5);
  const maxLength = getRandomArbitrary(5, 11);
  const progression = generateProgression(start, step, maxLength);

  const hiddenIndex = getRandomArbitrary(0, maxLength - 1);
  const hiddenValue = progression[hiddenIndex];

  progression[hiddenIndex] = '..';

  const question = progression;
  const answer = hiddenValue.toString();
  const gameData = [question, answer];
  return gameData;
};

const discriptions = 'What number is missing in the progression?';

const startGame = () => mainEngine(discriptions, createGameData);
export default startGame;
