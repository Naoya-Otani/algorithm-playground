{
  let memo: { [key: string]: boolean } = {};

  function isSubset(i: number, w: number, a: number[]): boolean {
    const key = `${i},${w}`;
    console.log(key);
    if (key in memo) return memo[key];
    if (w === 0) return true;
    if (i === 0 && w !== 0) return false;
    // a[i-1]を選ばないとき
    if (isSubset(i - 1, w, a)) return (memo[key] = true);
    // a[i-1]を選ぶとき
    if (isSubset(i - 1, w - a[i - 1], a)) return (memo[key] = true);

    return (memo[key] = false);
  }

  const st = performance.now();
  console.log(isSubset(10, 22, [1, 2, 3, 4, 8, 9, 11, 13, 15, 18]));
  const ed = performance.now();
  console.log(`実行結果 : ${ed - st} ms`);
}

/* isSubsetの全体像
isSubset(4, 5, [1, 2, 3, 4])
├── isSubset(3, 5, [1, 2, 3, 4])               a[3]=4 を選ばない
│   ├── isSubset(2, 5, [1, 2, 3, 4])               a[2]=3 を選ばない
│   │   ├── isSubset(1, 5, [1, 2, 3, 4])               a[1]=2 を選ばない
│   │   │   ├── isSubset(0, 5, [1, 2, 3, 4])               a[0]=1 を選ばない => false
│   │   │   └── isSubset(0, 4, [1, 2, 3, 4])               a[0]=1 を選ぶ => false
│   │   └── isSubset(1, 3, [1, 2, 3, 4])               a[1]=2 を選ぶ
│   │       ├── isSubset(0, 3, [1, 2, 3, 4])               a[0]=1 を選ばない => false
│   │       └── isSubset(0, 2, [1, 2, 3, 4])               a[0]=1 を選ぶ => false
│   └── isSubset(2, 2, [1, 2, 3, 4])               a[2]=3 を選ぶ
│       ├── isSubset(1, 2, [1, 2, 3, 4])               a[1]=2 を選ばない
│       │   ├── isSubset(0, 2, [1, 2, 3, 4])               a[0]=1 を選ばない => false
│       │   └── isSubset(0, 1, [1, 2, 3, 4])               a[0]=1 を選ぶ => false
│       └── isSubset(1, 0, [1, 2, 3, 4])               a[1]=2 を選ぶ => true
└── isSubset(3, 1, [1, 2, 3, 4])               a[3]=4 を選ぶ
    ├── isSubset(2, 1, [1, 2, 3, 4])               a[2]=3 を選ばない
    │   ├── isSubset(1, 1, [1, 2, 3, 4])               a[1]=2 を選ばない
    │   │   ├── isSubset(0, 1, [1, 2, 3, 4])               a[0]=1 を選ばない => false
    │   │   └── isSubset(0, 0, [1, 2, 3, 4])               a[0]=1 を選ぶ => true
    │   └── isSubset(1, -2, [1, 2, 3, 4])               a[1]=2 を選ぶ => false
    └── isSubset(2, -2, [1, 2, 3, 4])               a[2]=3 を選ぶ => false
*/
