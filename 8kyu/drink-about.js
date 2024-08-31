function peopleWithAgeDrink(old) {
  const map = { a: 'drink toddy', b: 'drink coke', c: 'drink beer', d: 'drink whisky' }
  return old < 14 ? map.a : old < 18 ? map.b : old < 21 ? map.c : map.d 
}
