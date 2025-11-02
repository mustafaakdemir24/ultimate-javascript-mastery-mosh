const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  return course.name === "xvy";
});

const index = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(index);
