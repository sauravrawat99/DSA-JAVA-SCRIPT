const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;

let rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;

  reverse(nums, n - 1, 0);
  reverse(nums, k - 1, 0);
  reverse(nums, n - 1, k);

  return nums;
};

let reverse = (nums, end, start) => {
  while (end > start) {
    [nums[end], nums[start]] = [nums[start], nums[end]];
    end--;
    start++;
  }
};

console.log(rotate(nums, 2));
