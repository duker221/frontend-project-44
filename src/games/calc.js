import mainEngine from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const calculateExpression = (randomExpression, operandA, operandB) => {
  switch (randomExpression) {
    case '+':
      return operandA + operandB;
    case '-':
      return operandA - operandB;
    case '*':
      return operandA * operandB;
    default:
      return null;
  }
};

const createGameData = () => {
  const randomExpression = operators[getRandomNumber(0, 3)];
  const randomOperandA = getRandomNumber(0, 50);
  const randomOperandB = getRandomNumber(0, 50);

  const question = `${randomOperandA} ${randomExpression} ${randomOperandB}`;
  const answer = calculateExpression(randomExpression, randomOperandA, randomOperandB);
  const gameData = [question, String(answer)];
  return gameData;
};

const discriptions = 'What is the result of the expression?';

const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;
