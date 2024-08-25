function filterString(value) {
  let ans = []
  value.split("").forEach(chr => chr.charCodeAt() < 97 ? ans.push(chr) : chr)
  return Number(ans.join(""))
}
