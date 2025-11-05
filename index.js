const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();

// Beginning
const first = numbers.shift();
console.log(first);

// Middle
numbers.splice(1, 2);
console.log(numbers);
