const includes = (array, searchElement) => {
  for (let item of array) {
    if (searchElement === item) return true;
  }
  return false;
};

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 4));
