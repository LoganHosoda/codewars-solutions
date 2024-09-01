function duckDuckGoose(players, goose) {
  let idx = goose % players.length - 1 
  return idx >= 0 ? players[idx].name : players[players.length - 1].name
}
