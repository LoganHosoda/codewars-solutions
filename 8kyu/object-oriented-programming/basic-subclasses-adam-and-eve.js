class Human {
  constructor(name) {
    this.name = name
  }
}

class Man extends Human {
  constructor(name) {
    super(name)
  }
}

class Woman extends Human {
  constructor(name) {
    super(name)
  }
}

class God{
/**
 * @returns Human[]
 */
  static create(){
    let man = new Man("Adam")
    let woman = new Woman('Eve')
    let humans = [man, woman]
    return humans
  }
}
