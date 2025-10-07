// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const countTruty = (array) => {
  let trutyCount = 0;
  for (let item of array) {
    if (item) trutyCount++;
  }
  return trutyCount;
};

console.log(
  countTruty([undefined, 1, "Mosh", false, true, 0, "Mustafa", NaN, ""])
);
