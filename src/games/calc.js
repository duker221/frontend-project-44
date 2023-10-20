import mainEngine from '../index.js';

const operators = ['+', '-', '*'];

const getRandomInt = (max) => Math.floor(Math.random() * max);

const randomCalc = (randomExpression, operandA, operandB) => {
    if ( randomExpression === '+' ) {
        return operandA + operandB;
    } else if ( randomExpression === '-' ) {
        return operandA - operandB;
    } else if ( randomExpression === '*' ) {
        return operandA * operandB;
    }
};

const createGameData = () => {
    let randomExpression = operators[getRandomInt(3)]; 
    let randomOperandA = getRandomInt(50); 
    let randomOperandB = getRandomInt(50); 

    

    const question = `${randomOperandA} ${randomExpression} ${randomOperandB}`;
    const answer = randomCalc(randomExpression, randomOperandA, randomOperandB);
    const gameData = [question, String(answer)];
    return gameData;
}

const discriptions = 'What is the result of the expression?'


const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;

