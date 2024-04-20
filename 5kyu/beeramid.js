const beeramid = (bonus, cost) => {
  const beers = Math.floor(bonus / cost);
  let beeramid = 0;
  let square = 1;
  while (beers) {
    let needed = square ** 2;
    if (beers >= needed) {
      beeramid += 1;
      square += 1;
      beers -= needed;
    }
  }
  return beeramid;
}