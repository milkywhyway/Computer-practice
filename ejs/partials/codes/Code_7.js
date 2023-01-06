function formula (x) {
  return Math.cos(x ** 3) / 2.1 + Math.cos(x ** 2) / 1.1 - 8.3 * Math.sin(3 * x + 1)
}

function e_comp (x) {
  return Number(x) === x && x % 1 !== 0 && x.toString().split('.')[1].length >= 3
}

function factorial (num) {
  if (num < 0)
    return -1
  else if (num == 0)
    return 1
  else {
    return (num * factorial(num - 1))
  }
}

// A
let k = 1
let ak1 = [formula(k) / k]

let summa1
while (true) {
  k += 1
  ak1.push(formula(k) / k)
  let q1 = ak1[ak1.length - 2] / ak1[ak1.length - 1]
  summa1 = ak1[ak1.length - 1] / (1 - q1)
  if (e_comp(summa1)) break
}

document.write(`Сума першої спадної послідовності = ${summa1},<br>Кількість елементів = ${ak1.length}<br>`)

// Б
k = 1
const x = 0.6
let ak2 = [(-1) ** k * (formula(k) * x ** k) / factorial(k)]
let summa2
while (true) {
  k += 1
  ak2.push((-1) ** k * (formula(k) * x ** k) / factorial(k))
  let q2 = ak2[ak2.length - 2] / ak2[ak2.length - 1]
  summa2 = ak2[ak2.length - 1] / (1 - q2)
  if (e_comp(summa2)) break
}

document.write(`Сума другої спадної послідовності = ${summa2},<br>Кількість елементів = ${ak2.length}`)
