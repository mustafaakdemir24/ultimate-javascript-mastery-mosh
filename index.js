const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => course.name === "a");

console.log(course);

const index = courses.findIndex((course) => course.name === "a");

console.log(index);
