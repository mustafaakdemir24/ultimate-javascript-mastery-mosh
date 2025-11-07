const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const comgined = [...first, "a", ...second, "b"];

console.log(comgined);

// const copy = combined.slice();
const copy = [...comgined];
console.log(copy);
