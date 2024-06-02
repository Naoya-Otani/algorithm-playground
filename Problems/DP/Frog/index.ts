// 問題
// カエルが石の並んだ道を進むときに、各石の上でジャンプをすることができます。カエルは以下のルールに従ってジャンプできます：

// カエルは1つ先または2つ先の石にジャンプできます。
// 各石にはジャンプした際のコストが設定されています。
// カエルが最初の石（インデックス0）から最後の石（インデックスN-1）に到達するための最小のコストを求めなさい。

function getMinMoveCost(h: number[], N: number): number {
  let costs: number[] = new Array(N).fill(Infinity);
  costs[0] = 0;
  for (let i = 1; i < N; i++) {
    if (i === 1) {
      costs[i] = Math.abs(h[i] - h[i - 1]);
    } else {
      costs[i] = Math.min(
        costs[i - 1] + Math.abs(h[i] - h[i - 1]),
        costs[i - 2] + Math.abs(h[i] - h[i - 2])
      );
    }
  }
  return costs[N - 1];
}

const h = [2, 9, 4, 5, 1, 6, 10];
const N = h.length;
console.log(getMinMoveCost(h, N));
