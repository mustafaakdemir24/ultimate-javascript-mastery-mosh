// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
//  12 points -> suspended

const checkSpeed = (speed) => {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return "Ok";

  const points = Math.floor((speed - speedLimit) / 5);
  if (points >= 12) return "Licence suspended";
  return `Point: ${points}`;
};

console.log(checkSpeed(130));
