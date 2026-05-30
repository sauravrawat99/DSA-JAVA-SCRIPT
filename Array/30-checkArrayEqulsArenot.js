const a = [1, 2, 5, 4, 0],
  b = [2, 4, 5, 0, 1];

function checkEquals(a, b) {
  // create object
  const map = {};

  for (let num of a) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let num of b) {
    if (!(num in map) || map[num] === 0) return false;
    map[num]--;
  }
  return true;
}

console.log(checkEquals(a, b));

function checkEqualsFormap(params) {
  const map = new Map();
  for (let num of a) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(map);

  for (let num of b) {
    if (!map.has(num) || map.get(num) === 0) {
      return false;
    }
    map.set(num, (map.get(num) || 0) - 1);
  }
  return true;
}
console.log(checkEqualsFormap(a, b));
