// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Calculate apples
  let appleCount = 0;
  let orangeCount = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < apples.length || p2 < oranges.length) {
    // apple count
    if (apples[p1] >= 0) {
      let appleVal = a + apples[p1];
      if (appleVal >= s && appleVal <= t) {
        appleCount += 1
        p1 += 1;
      } else {
        p1 += 1
      }
    } else {
      p1 += 1;
    }

    // oranges count
    if (oranges[p2] < 0) {
      let orangeVal = b + oranges[p2];
      if (orangeVal >= s && orangeVal <= t) {
        orangeCount += 1;
        p2 += 1;
      } else {
        p2 += 1;
      }
    } else {
      p2 += 1;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}