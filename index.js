// Define the headquarters block
const hqBlock = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqBlock);
}

function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
