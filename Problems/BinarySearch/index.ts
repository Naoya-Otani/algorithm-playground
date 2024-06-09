function binarySearch(arr: number[], key: number): boolean {
  let left = 0;
  let right = arr.length - 1;
  let result = false;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(left, mid, right);
    if (arr[mid] == key) {
      result = true;
      break;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else if (arr[mid] > key) {
      right = mid - 1;
    }
  }

  return result;
}

console.log(binarySearch([0, 2, 3, 5, 8, 9, 13, 15, 54, 77], 77));
