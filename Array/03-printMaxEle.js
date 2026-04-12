const arr = [12, 34, 2, 4, 3, , 56, 543, 122, 33];

const findmax = (arr) => {
  if (arr.length === 0) {
    return "array is empty";
  }
  let Max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (Max < arr[i]) {
      Max = arr[i];
    }
  }
  return Max;
};

console.log(findmax(arr));
