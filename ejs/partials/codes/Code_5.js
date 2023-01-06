let table = document.createElement('table')
table.classList.add('table')
table.classList.add('table-bordered')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

table.appendChild(thead)
table.appendChild(tbody)


let row_1 = document.createElement('tr')
let heading_1 = document.createElement('th')
heading_1.innerHTML = 'пайп'
let heading_2 = document.createElement('th')
heading_2.innerHTML = 'пек'
let heading_3 = document.createElement('th')
heading_3.innerHTML = 'л'

row_1.appendChild(heading_1)
row_1.appendChild(heading_2)
row_1.appendChild(heading_3)
thead.appendChild(row_1)


const start = Number(prompt('Введіть початкове значення'))
const edge = Number(prompt('Введіть кількість рядків'))
const step = Number(prompt('Введіть крок'))

for (let i = start; i < edge * step + start; i += step) {
  let row = document.createElement('tr')
  let row_data_1 = document.createElement('td')
  row_data_1.innerHTML = i.toFixed(3)
  let row_data_2 = document.createElement('td')
  row_data_2.innerHTML = (i * 54.18).toFixed(3)
  let row_data_3 = document.createElement('td')
  row_data_3.innerHTML = (i * 477.33).toFixed(3)

  row.appendChild(row_data_1)
  row.appendChild(row_data_2)
  row.appendChild(row_data_3)
  tbody.appendChild(row)
}

document.getElementById('body').appendChild(table)
