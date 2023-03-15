const blocksAway = function(directions) {
  let eastBlocks = 0;
  let northBlocks = 0;
  let directionSign = ["North", "West", "East", "South"];
  let currentDirection;
  let finalSpot = {};
  if (directions[0] === "left") {
    currentDirection = directionSign[2];
  }
  else {
    currentDirection = directionSign[0];
  }
  for (let i = 0; i < directions.length; i += 2) {
    if (currentDirection === directionSign[0]) {
      if (directions[i] === "left") {
        currentDirection = directionSign[1];
        eastBlocks -= directions[i + 1];
      }
      else {
        currentDirection = directionSign[2];
        eastBlocks += directions[i + 1];
      }
    }
    else if (currentDirection === directionSign[1]) {
      if (directions[i] === "left") {
        currentDirection = directionSign[3];
        northBlocks -= directions[i + 1];
      }
      else {
        currentDirection = directionSign[0];
        northBlocks += directions[i + 1];
      }
    }
    else if (currentDirection === directionSign[2]) {
      if (directions[i] === "left") {
        currentDirection = directionSign[0];
        northBlocks += directions[i + 1];
      }
      else {
        currentDirection = directionSign[3];
        northBlocks -= directions[i + 1];
      }
    }
    else { // south
      if (directions[i] === "left") {
        currentDirection = directionSign[2];
        eastBlocks += directions[i + 1];
      }
      else {
        currentDirection = directionSign[1];
        eastBlocks -= directions[i + 1];
      }
    }
  }
  finalSpot.east = eastBlocks;
  finalSpot.north = northBlocks;

  return finalSpot;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));