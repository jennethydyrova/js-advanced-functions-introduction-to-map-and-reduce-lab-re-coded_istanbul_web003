// Your code here
sourceArray = [1, 2, 3];
dune = ["paul", "gurney", "vladimir", "jessica", "chani"];

function mapToNegativize(sourceArray) {
  return sourceArray.map((el) => el * -1);
}
function mapToNoChange(sourceArray) {
  return sourceArray.map((el) => el);
}

function mapToDouble(sourceArray) {
  return sourceArray.map((el) => el * 2);
}
function mapToSquare(sourceArray) {
  return sourceArray.map((el) => el * el);
}
// console.log(mapToSquare(sourceArray));

function reduceToTotal(sourceArray, startingPoint = 0) {
  const reduceTotal = function (a, b) {
    return a + b;
  };

  return sourceArray.reduce(reduceTotal, startingPoint);
}
function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((a, b) => a && Boolean(b), true);
}
function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((a, b) => a || Boolean(b), false);
}
