const findTwosum = (arr, targer) => {
  if (arr.length < 2) {
    return "invalid array";
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targer) {
        return { i, j };
      }
    }
  }
  return "not found";
};

// console.log(findTwosum([9, 7, 8, 6, 2, 3, 5, 6], 20));

const twoSum = function (nums, target) {
  const map = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need), i];
    }

    // current value store karo
    map.set(nums[i], i);
  }
};

console.log(twoSum([9, 7, 8, 6, 2, 3, 5, 6],8));
