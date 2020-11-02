/*- Function Description

Complete the catAndMouse function in the editor below.

catAndMouse has the following parameter(s):

int x: Cat A's position
int y: Cat B's position
int z: Mouse C's position*/

/*- Returns

string: Either 'Cat A', 'Cat B', or 'Mouse C'*/


function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);

  return catA > catB ? 'Cat B': (catA < catB ? 'Cat A' : 'Mouse C');
}