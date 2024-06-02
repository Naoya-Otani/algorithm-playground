let memo: { [key: number]: number } = {};

function fibonacci(n: number): number {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(100));
