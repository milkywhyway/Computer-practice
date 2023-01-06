let x = 0
let y = 1

for (let k = 1; k <= 10; k++) {
  x += Math.sin(k) * Math.cos(k ** 3) * Math.sin(k ** 2 - 4.2) + 4.27
  y *= Math.abs(Math.sin(12 * k) * Math.cos(Math.abs(2 * k)) / 3) + 4.21
}

let z = 5 * x * y - 4

document.write(`z = ${z}<br>x = ${x}<br>y = ${y}`)
