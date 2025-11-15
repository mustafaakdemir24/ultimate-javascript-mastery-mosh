const numbers = [1, 2, 3, 4];

const getMax = (array) => {
  if (array.length === 0) return undefined;

  let max = array[0];

  for (let i = 1; i <= array.length; i++) if (array[i] > max) max = array[i];

  return max;
};

const getMaxReduce = (array) => {
  if (array.length === 0) return array.length;

  return array.reduce((a, b) => (a > b ? a : b));
};

const max = getMaxReduce(numbers);
console.log(max);
