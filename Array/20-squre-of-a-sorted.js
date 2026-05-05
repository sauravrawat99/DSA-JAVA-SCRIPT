/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let fillArray = nums.length - 1;

  const result = new Array(nums.length);

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (leftSq < rightSq) {
      result[fillArray] = rightSq;
      right--;
    } else {
      result[fillArray] = leftSq;
      left++;
    }
    fillArray--;
  }
  return result;
};

console.log(sortedSquares([-4, -2, 0, 5, 10]));
