// cheack power of two
function PowerTwo(n) {
  // base case
  if (n === 1) {
    return true;
  }
  if (n <= 0) {
    return false;
  }
  if (n % 2 !== 0) {
    return false;
  }

  return PowerTwo(n / 2);
}
console.log(PowerTwo(20));
