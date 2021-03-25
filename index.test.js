const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input)
    expect(input).not.toEqual(expected)

  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected) 
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toStrictEqual(actual)
    
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const numArr = [2, 45, 1, 2000, 0, 8, -4]
    const expected = 2000
    const largest = utils.findLargestInteger(numArr)
    expect(largest).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.season).toBe('spring')
    iterate(1)
    expect(seasons.season).toBe('summer')
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.season).toBe('spring')
    iterate(2)
    expect(seasons.season).toBe('fall')
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.season).toBe('spring')
    iterate(3)
    expect(seasons.season).toBe('winter')
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.season).toBe('spring')
    iterate(4)
    expect(seasons.season).toBe('spring')
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.season).toBe('spring')
    iterate(5)
    expect(seasons.season).toBe('summer')
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(seasons.season).toBe('spring')
    iterate(40)
    expect(seasons.season).toBe('spring')
  })
  function iterate(num) {
    for(let i = 0; i < num; i++){
      seasons.next()
    }
  }
})


describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    expect(focus.odometer).toBe(0)
    focus.drive(10)
    focus.drive(5)
    expect(focus.odometer).toBe(15)
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
    expect(focus.odometer).toBe(0)
    focus.drive(30)
    expect(focus.odometer).toBe(30)
    expect(focus.tank).toBe(19)
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
    expect(focus.odometer).toBe(0)
    expect(focus.tank).toBe(20)
    focus.drive(60)
    expect(focus.odometer).toBe(60)
    expect(focus.tank).toBe(18)
    focus.refuel(1)
    expect(focus.odometer).toBe(60)
    expect(focus.tank).toBe(19)
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
    expect(focus.odometer).toBe(0)
    expect(focus.tank).toBe(20)
    focus.drive(60)
    expect(focus.odometer).toBe(60)
    expect(focus.tank).toBe(18)
    focus.refuel(2)
    expect(focus.odometer).toBe(60)
    expect(focus.tank).toBe(20)
    focus.refuel(3)
    focus.refuel(100)
    focus.refuel(63)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
