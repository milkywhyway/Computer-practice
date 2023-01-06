let arr = []

for (let x = 0; x <= 7; x++) {
  arr.push(Math.abs(Math.cos(x ** 2) - 0.51) * Math.sin(3 * x - 4) - 4.44)
}

document.write(`Масив:<br> ${arr}<br>`)

let no_null_arr = arr.filter(num => num !== 0)

if (no_null_arr.length !== 0) {
  document.write(`Масив ненульових значень:<br> ${no_null_arr}`)
} else {
  document.write('Масив не має ненульових значень')
}
