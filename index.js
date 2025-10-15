// Factory Function
const createCircle = (radius) => {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
};

const myCircle = createCircle(1);

// Constructor Function
const Circle = (radius) => {
  this.radius = radius;
  this.draw = () => {
    console.log("Draw!");
  };
};

const circle = new Circle(1);
