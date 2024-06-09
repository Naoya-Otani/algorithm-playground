{
  function lowerBound(arr: number[], key: number): number {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  function pairSum(a: number[], b: number[], k: number): number {
    let minValue = Infinity;
    for (let i = 0; i < a.length; i++) {
      let iter = lowerBound(b, k - a[i]);
      if (iter < b.length) {
        let val = b[iter];
        if (a[i] + val < minValue) {
          minValue = a[i] + val;
        }
      } else {
        console.log(`No suitable pair found for a[i] = ${a[i]}`);
      }
    }
    return minValue === Infinity ? -1 : minValue;
  }

  const a = [1, 5, 9];
  const b = [3, 6, 8];
  const target = 11;

  console.log(pairSum(a, b, target));
}
