// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let minValue = 0;
  let maxValue = 0;
  let minIndex = 0;
  let maxIndex = 0;
  let minSum = 0;
  let maxSum = 0;

  minValue = Math.min(...arr);
  maxValue = Math.max(...arr);
  minIndex = arr.indexOf(minValue);
  maxIndex = arr.indexOf(maxValue);

  for (let i = 0; i < arr.length; i++){
    if (minIndex != i) {
      maxSum += arr[i];
    }
    if (maxIndex != i) {
      minSum += arr[i];
    }
  }
  console.log(minSum, maxSum);
}