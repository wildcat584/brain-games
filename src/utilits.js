const getRandomNumber = (minNum = 1, maxNum = 100) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default getRandomNumber;
