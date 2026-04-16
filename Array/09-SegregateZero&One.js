const arr = [0, 1, 1, 0, 0];
const segregate = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 0) left++;
    else if (arr[right] === 1) left--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
};
console.log(segregate(arr));
