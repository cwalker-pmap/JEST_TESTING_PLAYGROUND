import sum from './sum'
import subtract from './subtract'

// using test global
test('adds  1 + 2 to equal 3', () => {
  // using expect global
  expect(sum(1, 2)).toBe(3)
})

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2,1)).toBe(1)
})
