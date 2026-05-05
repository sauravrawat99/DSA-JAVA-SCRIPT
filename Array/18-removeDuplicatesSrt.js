// pattern same dariction
// using two pointer tech

function removeDuplicate(nums) {
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[count] !== nums[right]) {
      count++;
      nums[count] = nums[right];
    }
  }
  return count + 1;
}

const nums = [1, 1, 2, 2, 3, 3];
let k = removeDuplicate(nums);

console.log(nums.slice(0, k)); // [1,2,3]
