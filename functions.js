function fizzbuzzLong(){
  for(let i=1; i<=100; i++){
    let log = ''
    if(i%3===0){
      log += 'Fizz'
      if(i%5===0){
        log += 'Buzz'
      }
    }
    else if(i%5===0){
      log = 'Buzz'
    }
    else{
      log = i
    }
    console.log(log)
  }
}

function fizzbuzz(){
  let fizzBuzzed = []
  for(let i=1; i<=100; i++){
    fizzBuzzed.push((i%3===0?'Fizz':'')+(i%5===0?'Buzz':'')||i)
  }
  return fizzBuzzed
  console.log(fizzBuzzed)
}

module.exports = {
  fizzbuzz,
  fizzbuzzLong,
}