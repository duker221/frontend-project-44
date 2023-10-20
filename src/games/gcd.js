import mainEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getMaxOfArray = (numArray) => { return Math.max.apply(null, numArray); };

const commonDivisor = (numberA, numberB) => {
    let arr = [];

    for (let i = 1; i < numberA; i += 1) {
        if ( numberA % i === 0 && numberB % i === 0) {
            arr.push(i)
        };
    };
    return arr;
}


const createGameData = () => {
    let numberA = getRandomInt(100);
    let numberB = getRandomInt(100);

    let question = `${numberA} ${numberB}`;

    let answer = getMaxOfArray(commonDivisor(numberA, numberB));

    const gameData = [question, String(answer)]
    return gameData;
}

const discriptions = 'Find the greatest common divisor of given numbers.';

const startGame = () => mainEngine(discriptions, createGameData);

export default startGame;