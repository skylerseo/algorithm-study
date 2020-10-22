// - Function Description

// Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

// birthday has the following parameter(s):

// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

function birthday(s, d, m) {
  let counter = 0;
  const reducer = (a, b) => a + b;
  for(let i = 0; i < s.length - m + 1; i++){
    if (s.slice(i,i + m).reduce(reducer) == d){
      counter++;
    }
  }
  return counter;
}