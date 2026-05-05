function maxSum(nums, k) {
  let maxSum = 0;
  for (let i = 0; i < nums.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 2));

// using brute force O(n) and space O(1)

// optimize
// pattern fixedSize slinding window

function maxSum_Optimized(nums, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Pehli window banao
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;

  // Window slide karo
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i]; // naya element add karo
    windowSum -= nums[i - k]; // purana element hatao
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSum_Optimized([2, 1, 5, 1, 3, 2], 2));

