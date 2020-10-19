// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let maxNum = Math.max(...candles);
  let map = {};

  for (let i = 0; i < candles.length; i++){
    if (!map[candles[i]]) {
      map[candles[i]] = 1;
    } else {
      map[candles[i]] += 1;
    }
  }

  return map[maxNum];
}