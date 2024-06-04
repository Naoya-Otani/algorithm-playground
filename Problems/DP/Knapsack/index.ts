function knapsack(items: number[][], maxWeight: number) {
  let n = items.length;
  // 初期化
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(maxWeight + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const [weight, value] = items[i - 1];
    for (let w = 0; w <= maxWeight; w++) {
      console.log(`i:${i} : w:${w}`);
      if (weight <= w) {
        // i番目のアイテムを選ぶ場合
        dp[i][w] = Math.max(
          dp[i - 1][w], // i-1のアイテムの最大価値
          dp[i - 1][w - weight] + value //
        );
      } else {
        // i番目のアイテムを選ばない場合
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp;
}
const items = [
  // weight, value
  [2, 3],
  [1, 2],
  [2, 1],
  [1, 3],
];
console.log(knapsack(items, 3));

/*

*/
