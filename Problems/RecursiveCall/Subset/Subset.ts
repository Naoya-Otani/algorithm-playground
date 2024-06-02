function isSubset(i: number, w: number, a: number[]): boolean {
  // 最終的に目標値が0になったとき
  if (w === 0) {
    return true;
  }

  // 最後まで探索したが、目標値が0にならなかった
  if (i === 0 && w !== 0) {
    return false;
  }

  // a[i-1]を選ばない場合
  if (isSubset(i - 1, w, a)) return true;

  // a[i-1]を選ぶ場合
  if (isSubset(i - 1, w - a[i - 1], a)) return true;

  return false;
}

const arr = [2, 5, 7, 13];
const target = 11;
const i = arr.length;

const st = performance.now();
console.log(isSubset(12, 22, [1, 2, 3, 4, 8, 9, 11, 13, 15, 18, 20, 22]));
const ed = performance.now();
console.log(`実行結果 : ${ed - st} ms`);

// a[i-1]から走査しているが、a[1]からでも可能
