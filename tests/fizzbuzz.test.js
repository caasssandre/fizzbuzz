const {fizzbuzz} = require('../functions')

// these tests are executed using jest

let oldLog = console.log // storing the old console.log function
oldLog('Careful, console.log has been overridden in this test suite, please use oldLog instead.')
const consoleOutputs = []
console.log = variable => {
  consoleOutputs.push(variable)
}

test('function fizzbuzz exists', ()=>{
  const expected = "function"
  const actual = typeof fizzbuzz
  expect(actual).toEqual(expected)
})

fizzbuzz()

test('fizzbuzz invokes console.log 100 times', ()=>{
  const expected = 100
  const actual = consoleOutputs.length
  expect(actual).toEqual(expected)
})

test('numbers divisible by 3 but not by 5 console.log Fizz', ()=>{
  for(let i=0; i<consoleOutputs.length; i++){
    if((i+1)%3 == 0 && (i+1)%5 !=0){
        expect(consoleOutputs[i]).toEqual('Fizz')
    }
  }
})

test('numbers divisible by 5 but not by 3 console.log Buzz', ()=>{
  for(let i=0; i<consoleOutputs.length; i++){
    if((i+1)%5 == 0 && (i+1)%3 !=0){
        expect(consoleOutputs[i]).toEqual('Buzz')
    }
  }
})

test('numbers divisible by 5 and by 3 console.log FizzBuzz', ()=>{
  for(let i=0; i<consoleOutputs.length; i++){
    if((i+1)%5 == 0 && (i+1)%3 ==0){
        expect(consoleOutputs[i]).toEqual('FizzBuzz')
    }
  }
})

test('numbers not divisible by 5 nor by 3 console.log the number', ()=>{
  for(let i=0; i<consoleOutputs.length; i++){
    if((i+1)%5 != 0 && (i+1)%3 !=0){
        expect(consoleOutputs[i]).toEqual(i+1)
    }
  }
})

