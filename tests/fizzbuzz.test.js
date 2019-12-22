const {fizzbuzz} = require('../functions')

const fizzbuzzed = fizzbuzz()

test('tests are working', ()=>{
  expect(2).toEqual(2)
})

test('function fizzbuzz exists', ()=>{
  const expected = "function"
  const actual = typeof fizzbuzz
  expect(actual).toEqual(expected)
})

test('fizzbuzz returns an array of length 100', ()=>{
  const expected = 100
  const actual = fizzbuzzed.length
  expect(actual).toEqual(expected)
})

test('the last element of the array is Buzz', ()=>{
  const expected = "Buzz"
  const actual = fizzbuzzed[fizzbuzzed.length-1]
  expect(actual).toEqual(expected)
})

test('the element at position 2 is equal to fizz', ()=>{
  const expected = "Fizz"
  const actual = fizzbuzzed[2]
  expect(actual).toEqual(expected)
})

test('the element at position 4 is equal to buzz', ()=>{
  const expected = "Buzz"
  const actual = fizzbuzzed[4]
  expect(actual).toEqual(expected)
})

test('the element at position 14 is equal to FizzBuzz', ()=>{
  const expected = "FizzBuzz"
  const actual = fizzbuzzed[14]
  expect(actual).toEqual(expected)
})

test('the element at position 15 is equal to 16', ()=>{
  const expected = 16
  const actual = fizzbuzzed[15]
  expect(actual).toEqual(expected)
})

test('the element at position 29 is equal to FizzBuzz', ()=>{
  const expected = "FizzBuzz"
  const actual = fizzbuzzed[29]
  expect(actual).toEqual(expected)
})

fizzbuzz()