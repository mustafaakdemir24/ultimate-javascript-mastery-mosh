const marks = [80, 80, 50];

// 0 - 59: F
// 60 - 59: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const calculateGrade = (marks) => {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "D";
  return "A";
};

const calculateAverage = (array) => {
  let sum = 0;
  for (let item of array) sum += item;

  return sum / array.length;
};

console.log(calculateGrade(marks));
