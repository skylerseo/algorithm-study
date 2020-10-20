// - Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format
// Returns

// string: the time in 24 hour format

function timeConversion(s) {
  const arr = s.slice(0,8).split(':');
  
  arr[0] = (s.indexOf('PM') > -1) ?
  (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
  (arr[0] == 12 ? '00' : arr[0]);

  return arr.join(':');
}