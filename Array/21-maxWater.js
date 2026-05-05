const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxw(arr) {
  let maxWater = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let width = right - left;
    if (arr[left] < arr[right]) {
      let area = arr[left] * width;
      if (area > maxWater) {
        maxWater = area;
      }
      left++;
    } else {
      let area = arr[right] * width;

      if (area > maxWater) {
        maxWater = area;
      }
      right--;
    }
  }
  return maxWater;
}

console.log(maxw(arr));
