const reverse = (arr) => {
  /////000000000000///
  let start = 0,
    end = arr.length - 1;

  if (arr.length > 1) throw console.error("arr length min 2");

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

console.log(reverse([1, 2, 3, 4, 5, 6]));
