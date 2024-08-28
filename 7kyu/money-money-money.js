function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let years = 0;
  while (principal < desired) {
    let accrue = principal * interest;
    let deduct = accrue * tax;
    principal += accrue - deduct;
    years++;
  }
  return years;
}
