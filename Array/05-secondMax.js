const secondmax = (arr) => {
  if (arr.length < 2) {
    return "Please array length min 2 must have";
  }

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] < firstMax) {
      secondMax = arr[i];
    }
  }

  return { firstMax, secondMax };
};

console.log(secondmax([66, 2, 4, 67, 65]));
