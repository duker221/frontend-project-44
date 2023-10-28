const getRandomNumber = (min = 0, max = 200) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomNumber;
