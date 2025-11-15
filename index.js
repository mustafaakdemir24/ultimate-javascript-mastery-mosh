const numbers = [1, 2, 3, 4, 1, 1];

const except = (array, excluded) => {
  const output = new Array();

  for (let element of array) {
    if (!excluded.includes(element)) output.push(element);
  }

  return output;
};

const output = except(numbers, [1, 2, 3]);

console.log(output);
