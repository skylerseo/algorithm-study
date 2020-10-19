/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.*/

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let divide = arr.length;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      positive += 1;
    }
  }

  console.log((positive / divide).toFixed(6));
  console.log((negative / divide).toFixed(6));
  console.log((zero / divide).toFixed(6));
}