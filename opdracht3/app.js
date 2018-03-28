const express = require('express')
const app = express()
const push = require('push.js')
const ejs = require('ejs')

console.log(push)

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => {
	console.log(`Server listening at ${port}`)
})