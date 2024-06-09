function optimizeSnipe(h: number[], s: number[]) {
  const n = h.length;
  let left = 0;
  let right = 10000;
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2);
    let ok = true;
    let time: number[] = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      if (mid < h[i]) {
        ok = false;
        break;
      } else {
        time[i] = Math.floor((mid - h[i]) / s[i]);
      }
    }
    if (ok) {
      time.sort((a, b) => a - b);
      for (let i = 0; i < n; i++) {
        if (time[i] < i) {
          ok = false;
          break;
        }
      }
    }
    if (ok) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
}

console.log(optimizeSnipe([1, 4, 8], [1, 1, 1]));
