// For the numbers 1 to 100, print a string for each number as per the following rules:
// If the number is divisible by 3, print ‘Fizz’
// If the number is divisible by 5, print ‘Buzz’
// If the number is divisible by 3 and 5, print ‘FizzBuzz’
// If the number is not divisible by 3 or 5, print the number

function fizzbuzz(){
  for(let i=1; i<=100; i++){
    console.log(((i%3===0?'Fizz':'')+(i%5===0?'Buzz':'')||i))
  }
}

module.exports = {
  fizzbuzz,
}