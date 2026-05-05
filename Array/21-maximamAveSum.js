function maxsum(arr, k) {
  let Average = 0;
  let maxAverage = 0;
  for (let i = 0; i < k; i++) {
    Average += arr[i];
  }
  maxAverage = Average;
  for (let i = k; i < arr.length; i++) {
    Average += arr[i];
    Average -= arr[i - k];
    maxAverage = Math.max(Average, maxAverage);
  }
  return maxAverage / k;
}
console.log(maxsum([1, 2, 3, 4, 5, 6], 3));
