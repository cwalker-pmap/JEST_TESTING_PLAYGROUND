import sum from './sum'

// using test global
test('adds  1 + 2 to equal 3', () => {
  // using expect global
  expect(sum(1, 2)).toBe(3)
})
