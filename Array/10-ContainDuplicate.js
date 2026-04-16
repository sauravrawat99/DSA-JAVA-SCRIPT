// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// that time we use brute force and time complexity O(n2) bad space O(1)
const findDuplicate = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

// optemize approach

console.log(findDuplicate([1, 2, 3, 4, 5, 2, 1, 3]));
