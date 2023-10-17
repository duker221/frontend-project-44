#!/usr/bin/env node

import readLineSync from 'readline-sync';
//  Функция генерации случайного числа
const getRandomInt = (max) => Math.floor(Math.random() * max);

//  Функция проверки случайного числа на четность
const numberIsEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
//  Приветствие не обернул в отдельную функцию так как переменная userName нужна глобальной
console.log('Welcome to the Brain Games!');
const userName = readLineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"'); //   Правила игры

const brainEven = () => { // Основная логика игры. Знаю, что можно на много лучше:(
  let correctAnswer = 'yes';
  let i = 1;
  while (i <= 3) {
    const getNumber = getRandomInt(50);
    console.log(getNumber);
    const answer = readLineSync.question();
    if (numberIsEven(getNumber) === true && answer === 'yes') {
      console.log('Correct');
      i += 1;
    } else if (numberIsEven(getNumber) === false && answer === 'no') {
      console.log('Correct');
      i += 1;
    } else {
      numberIsEven(getNumber) === true ? correctAnswer : correctAnswer = 'no';
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      break;
    }
  }
  if (i === 4) {
    console.log(`Congratulations, ${userName}`);
  }
};

brainEven();
