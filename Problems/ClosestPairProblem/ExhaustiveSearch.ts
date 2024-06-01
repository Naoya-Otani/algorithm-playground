interface Point {
  x: number;
  y: number;
}

function distance(point1: Point, point2: Point): number {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function closestPair(points: Point[]): {
  closestPair: [Point, Point];
  minDistance: number;
} {
  let minDistance = Infinity;
  let closestPair: [Point, Point] = [points[0], points[0]];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = distance(points[i], points[j]);
      if (dist < minDistance) {
        minDistance = dist;
        closestPair = [points[i], points[j]];
      }
    }
  }

  return { closestPair, minDistance };
}

const points: Point[] = [
  { x: 2, y: 3 },
  { x: 12, y: 30 },
  { x: 40, y: 50 },
  { x: 5, y: 1 },
  { x: 12, y: 10 },
  { x: 3, y: 4 },
];

const result = closestPair(points);
console.log("Closest Pair:", result.closestPair);
console.log("Minimum Distance:", result.minDistance);
