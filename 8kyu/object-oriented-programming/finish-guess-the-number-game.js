class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    console.log(this.lives)
    if (this.lives === 0) { 
      throw Error
    }
    else {
      if (this.number === n) { return true }
      else {
        this.lives--
        return false
      }
    } 
  }
}
