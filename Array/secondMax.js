const secondmax = (arr) => {
  if (arr.length > 1) {
    return "pleace array lenth min 2 must have";
  }
  let firstMax = -Infinity;
  let seconMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    } else if (arr[i] < firstMax && arr[i] > seconMax) {
      seconMax = arr[i];
    }
  }
  return { firstMax, seconMax };
};

console.log(secondmax([2, 4, 67, 65]));
