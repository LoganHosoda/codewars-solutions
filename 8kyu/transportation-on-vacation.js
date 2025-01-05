function rentalCarCost(d) {
  let total = d * 40
  return d >= 7 ? total -= 50 : d >= 3 ? total -= 20 : total
}
