// - Function Description

// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
    return 'NO';
  } else {
    return 'YES';
  }
}