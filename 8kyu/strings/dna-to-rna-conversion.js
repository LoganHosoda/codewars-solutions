function DNAtoRNA(dna) {
  let swap = { "T": "U", "U": "T" }
  return dna.split("").map(c => swap[c] != undefined ? swap[c] : c).join("")
}
