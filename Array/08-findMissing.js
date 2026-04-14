let arr = [0, 1, 3, 5, 4, 6];
function missingNumber(nums) {
  let n = nums.length;

  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

console.log(missingNumber(arr));
