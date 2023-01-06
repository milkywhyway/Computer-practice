// Task 3

const log = (n, base) => {
  return (Math.log(n)) / (Math.log(base))
}

const choise1 = (x) => {
  const a = Number(prompt('Let a'))
  const b = Number(prompt('Let b'))
  const fi = Math.tan(x + a) - log(Math.abs(b + 7), 5)

  return Math.abs(Math.sin(2 * fi - 1.5) + 3 * Math.sin(fi ** 2)) + 2.38
}

const choise2 = (x) => {
  const c = Number(prompt('Let c'))
  const d = Number(prompt('Let d'))
  const omega = c * (x ** 2 + d * Math.E ** 1.3) ** 0.2

  return Math.cos(omega ** 2) - Math.sin(2 * omega - 1) + 4.29
}

// Task 7

const formula = (x) => {
  return Math.cos(x ** 3) / 2.1 + Math.cos(x ** 2) / 1.1 - 8.3 * Math.sin(3 * x + 1)
}

const e_comp = (x) => {
  return Number(x) === x && x % 1 !== 0 && x.toString().split('.')[1].length >= 3
}

const factorial = (num) => {
  if (num < 0)
    return -1
  else if (num == 0)
    return 1
  else {
    return (num * factorial(num - 1))
  }
}

exports.log = log
exports.choise1 = choise1
exports.choise2 = choise2
exports.formula = formula
exports.e_comp = e_comp
exports.factorial = factorial
