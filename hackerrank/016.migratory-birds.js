/* - Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

arr: an array of integers representing types of birds sighted */


function migratoryBirds(arr) {
  let map = {}, maxCount = 0, output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }

    // getting max count
    if (map[arr[i]] > maxCount) {
      maxCount = map[arr[i]];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (map[arr[j]] === maxCount) {
      output.push(arr[j]);
    }
  }

  return Math.min(...output);
}