function main(k: number, A: number[], B: number[]): number {
  let l = A.length;
  let min = Infinity;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      const sum = A[i] + B[j];
      if (sum >= k && min > sum) {
        min = sum;
      }
    }
  }

  return min;
}

let a = [8, 5, 4];
let b = [4, 1, 9];
let k = 10;

const startTime = performance.now();
console.log(main(k, a, b));
const endTime = performance.now();
console.log("実行時間：", endTime - startTime, "ms");
