const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const faker = require('faker')
const port = 3000

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))

var Users = []
var filteredUsers = []

function compare(a, b) {
	if (a.fullName < b.fullName)
		return -1;
	if (a.fullName > b.fullName)
		return 1;
	return 0;
}

for (var i = 0; i < 100; i++) {
	var fakeUser = faker.helpers.createCard();
	console.log(fakeUser)
	// push all data to allUser
	Users.push(fakeUser);
	filteredUsers = Users.map(function (d) {
		return {
			firstLetter: d.name.charAt(0),
			fullName: d.name,
			nickName: d.username
		}
	})
	filteredUsers.sort(compare);
};

console.log(filteredUsers)




app.get('/', (req, res) => {
	console.log(req.query.namesearch)

	if (req.query.namesearch) {
		res.locals.people = filteredUsers.filter((user) => {
			return user.fullName.toLowerCase().includes(req.query.namesearch.toLowerCase())
		})
	} else {
		res.locals.people = filteredUsers
	}

	res.render('index')
})

app.get('/contact/:id', (req, res) => {
	let detailedUser
	const {
		id
	} = req.params
	filteredUsers.forEach((user) => {
		if (user.nickName === id) {
			detailedUser = user
		}
		return
	})
	console.log(detailedUser)
	res.render('detail', {
		detailedUser
	})
})

app.listen(port, () => {
	console.log('Server listening at ' + port)
})