const arrayFromRange = (min, max) => {
  const nums = new Array();

  while (min <= max) {
    nums.push(min);
    min++;
  }

  return nums;
};

const numbers = arrayFromRange(1, -4);

console.log(numbers);
