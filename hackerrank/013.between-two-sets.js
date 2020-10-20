// - Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// a: an array of integers
// b: an array of integers

function getTotalX(a, b) {
  let result = 0;
  let index = 1;
  let cloneA = a.splice(1, a.length); // clone new array of 'a' but not 'a[0]'
  
  while(a[0] * index <= b[0]) {
    if(
      cloneA.every(item => (a[0] * index) % item === 0)
      &&
      b.every(item => item % (a[0] * index) === 0)
      ){
      result++;
    }
      index++;
  }

  return result;
}
