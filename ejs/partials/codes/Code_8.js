Array.prototype.max = function () {
  return Math.max.apply(null, this)
}

Array.prototype.min = function () {
  return Math.min.apply(null, this)
}


let table = document.createElement('table')
table.classList.add('table')
table.classList.add('table-bordered')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

table.appendChild(thead)
table.appendChild(tbody)

let row_1 = document.createElement('tr')
let heading_1 = document.createElement('th')
heading_1.innerHTML = 'x'
let heading_2 = document.createElement('th')
heading_2.innerHTML = 'y'

row_1.appendChild(heading_1)
row_1.appendChild(heading_2)
thead.appendChild(row_1)


let arr = []
for (let i = 0; i <= 5; i += 0.5) {
  let y = Math.sin(i ** 2) * Math.cos(i ** 3) - Math.sin(i) + 5.2
  arr.push(y)

  let row = document.createElement('tr')
  let row_data_1 = document.createElement('td')
  row_data_1.innerHTML = i.toFixed(3)
  let row_data_2 = document.createElement('td')
  row_data_2.innerHTML = y.toFixed(3)

  row.appendChild(row_data_1)
  row.appendChild(row_data_2)
  tbody.appendChild(row)
}

document.getElementById('body').appendChild(table)

document.write(`Добуток аргументів мінімального і максимального значень функції y = ${(arr.min()*arr.max()).toFixed(3)}`)
