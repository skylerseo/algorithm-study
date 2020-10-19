// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// 1 2 3
// 4 5 6
// 9 8 9  

function diagonalDifference(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let sum = 0;
  let total = 0;

  while (p1 < arr.length) {
      sum = arr[p1][p1] - arr[p1][p2];
      total += sum;
      p1 += 1;
      p2 -= 1;
  }
  return Math.abs(total);
}
