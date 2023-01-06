const express = require('express')
const path = require('path')

const PORT = process.env.PORT ?? 8080
const app = express()

const dinamicPath = path.resolve('ejs', 'index')

app.set('view engine', 'ejs')
app.set('viewes', path.resolve(__dirname, 'ejs'))

app.get('/task1', (req, res) => {
  res.render(dinamicPath, { task: 'Task1', route: '/Page1' })
})

app.get('/task2', (req, res) => {
  res.render(dinamicPath, { task: 'Task2', route: '/Page2' })
})

app.get('/task3', (req, res) => {
  res.render(dinamicPath, { task: 'Task3', route: '/Page3' })
})

app.get('/task3B', (req, res) => {
  res.render(dinamicPath, { task: 'Task3B', route: '/Page3B' })
})

app.get('/task4', (req, res) => {
  res.render(dinamicPath, { task: 'Task4', route: '/Page4' })
})

app.get('/task5', (req, res) => {
  res.render(dinamicPath, { task: 'Task5', route: '/Page5' })
})

app.get('/task6', (req, res) => {
  res.render(dinamicPath, { task: 'Task6', route: '/Page6' })
})

app.get('/task7', (req, res) => {
  res.render(dinamicPath, { task: 'Task7', route: '/Page7' })
})

app.get('/task8', (req, res) => {
  res.render(dinamicPath, { task: 'Task8', route: '/Page8' })
})

app.get('/task9', (req, res) => {
  res.render(dinamicPath, { task: 'Task9', route: '/Page9' })
})

app.get('/task10', (req, res) => {
  res.render(dinamicPath, { task: 'Task10', route: '/Page10' })
})

app.get('/task11', (req, res) => {
  res.render(dinamicPath, { task: 'Task11', route: '/Page11' })
})

app.get('/task12', (req, res) => {
  res.render(dinamicPath, { task: 'Task12', route: '/Page12' })
})

app.get('/task13', (req, res) => {
  res.render(dinamicPath, { task: 'Task13', route: 'https://github.com/milkywhyway/Computer-practice' })
})

app.get('/task14', (req, res) => {
  res.render(dinamicPath, { task: 'Task14', route: '/Page14' })
})


const resultPath = path.resolve('ejs', 'partials', 'codes', 'pages')

app.get('/Page1', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_1.html'), { task: 'Task1' })
})

app.get('/Page2', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_2.html'), { task: 'Task2' })
})

app.get('/Page3', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_3.html'), { task: 'Task3' })
})

app.get('/Page3B', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_3B.html'), { task: 'Task3B' })
})

app.get('/Page4', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_4.html'), { task: 'Task4' })
})

app.get('/Page5', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_5.html'), { task: 'Task5' })
})

app.get('/Page6', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_6.html'), { task: 'Task6' })
})

app.get('/Page7', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_7.html'), { task: 'Task7' })
})

app.get('/Page8', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_8.html'), { task: 'Task8' })
})

app.get('/Page9', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_9.html'), { task: 'Task9' })
})

app.get('/Page10', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_10.html'), { task: 'Task10' })
})

app.get('/Page11', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_11.html'), { task: 'Task11' })
})

app.get('/Page12', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_12.html'), { task: 'Task12' })
})

app.get('/Page13', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_13.html'), { task: 'Task13' })
})

app.get('/Page14', (req, res) => {
  res.sendFile(path.resolve(resultPath, 'Page_12.html'), { task: 'Task14' })
})


app.get('*', (req, res) => {
  res.render(dinamicPath, { task: 'Task1', route: '/Page1' })
})

app.listen(PORT, () => {
  console.log(`Start server on port http://localhost:${PORT}`)
})
