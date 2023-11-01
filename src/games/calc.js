import createGameEngine from '../index.js';
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
      throw new Error(`Unknown expression: '${randomExpression}'!`);
  }
};

const createGameData = () => {
  const randomExpression = operators[getRandomNumber(0, 3)];
  const randomOperandA = getRandomNumber(0, 50);
  const randomOperandB = getRandomNumber(0, 50);

  const question = `${randomOperandA} ${randomExpression} ${randomOperandB}`;
  const correctAnswer = calculateExpression(randomExpression, randomOperandA, randomOperandB);
  const gameData = [question, String(correctAnswer)];
  return gameData;
};

const discriptions = 'What is the result of the expression?';

const startGame = () => createGameEngine(discriptions, createGameData);

export default startGame;
