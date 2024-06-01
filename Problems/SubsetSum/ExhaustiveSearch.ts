// 部分和問題を解く
// 二進数表現を使って全探索する方法

function Subset(set: number[], target: number) {
  let N = set.length;
  let exist = false;
  for (let bit = 0; bit < 1 << N; bit++) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (bit & (1 << i)) {
        sum += set[i];
      }
    }
    if (target === sum) {
      exist = true;
    }
  }
  return exist;
}

console.log(Subset([2, 4, 5, 11], 10));
