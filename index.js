// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const fizzBuzz = (input) => {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0) {
    if (input % 5 === 0) return "FizzBuzz";
    return "Fizz";
  }
  if (input % 5 === 0) return "Buzz";
  return input;
};

console.log(fizzBuzz(false));
