function ln (n, base) {
  return (Math.log(n)) / (Math.log(base))
}

function choise1 (x) {
  const a = Number(prompt('Let a'))
  const b = Number(prompt('Let b'))

  const fi = Math.tan(x + a) - ln(Math.abs(b + 7), 5)

  return Math.abs(Math.sin(2 * fi - 1.5) + 3 * Math.sin(fi ** 2)) + 2.38
}

function choise2 (x) {
  const c = Number(prompt('Let c'))
  const d = Number(prompt('Let d'))

  const omega = c * (x ** 2 + d * Math.E ** 1.3) ** 0.2

  return Math.cos(omega ** 2) - Math.sin(2 * omega - 1) + 4.29
}

const x = Number(prompt('Let x'))
let f

// Розгалуження 1

if (Math.abs(x) < 10) {
  f = choise1(x)
} else {
  f = choise2(x)
}

// Розгалуження 2

f = Math.abs(x) < 10 ? choise1(x) : choise2(x)

document.write(`y = ${f}`)
