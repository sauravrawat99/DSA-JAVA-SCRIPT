// pattern opposite dariction
// important this question solve using two pointer tech

function twoSumSort(nums, targer) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === targer) {
      return [left, right];
    } else if (sum > targer) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(twoSumSort([1, 2, 3, 4, 5, 6], 10));
