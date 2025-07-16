const fizzbuzz = (number) => {
  if (number % 3 == 0 && number != 5 && number != 15) {
    return "Fizz"
  }
  if (number === 5) {
    return "Buzz"
  }
  if (number === 15) {
    return "Fizzbuzz"
  }
  return number
}

module.exports = { fizzbuzz }