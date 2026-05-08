// find fibonacci number
function fib(n) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

// Optimized using memoization
function fibOtp(n, memo = {}) {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }

  // already calculated?
  if (memo[n]) {
    return memo[n];
  }

  // recursion
  memo[n] = fibOtp(n - 1, memo) + fibOtp(n - 2, memo);

  return memo[n];
}

console.log(fibOtp(5));
