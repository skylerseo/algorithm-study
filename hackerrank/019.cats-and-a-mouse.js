function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);

  return catA > catB ? 'Cat B': (catA < catB ? 'Cat A' : 'Mouse C');
}