var teamA = document.querySelector('main aside:first-of-type input').value
var teamB = document.querySelector('main aside:last-of-type input').value
var main = document.querySelector('main')
var firstAside = document.querySelector('main aside:first-of-type')
var modal = document.querySelector('section')
var modalClose = document.querySelector('section p')
var modalResultaat = document.querySelector('section h2')

var resultaatBox = document.createElement('p')
resultaatBox.textContent = 'Je favoriete team heeft gewonnen met een score van: ' + teamA

var notificationBox = document.createElement('p')
notificationBox.className = 'notification'
notificationBox.textContent = 'Klik hier om push notificaties te ontvangen!'

if (window.Notification) {
	document.querySelector('body').insertBefore(notificationBox, modal)

	Notification.requestPermission(function (permission) {

		if (permission === "granted") {
		  var notification = new Notification("Hi there!")
		}
	  })

	var button = document.querySelector('.notification')

	button.addEventListener('click', function() {
		new Notification(teamA + ' > ' + teamB)
	})
}


main.insertBefore(resultaatBox, firstAside)

modalClose.addEventListener('click', hideModal)

if ("setTimeout" in window) {
	setTimeout(function() {
		if (teamA > teamB) {
			alert('Woooo, je favoriete team heeft gewonnen met een score van: ' + teamA)
		}
	}, 3000)

	setTimeout(function() {
		if (teamA > teamB) {
			showModal()
		}
	}, 3000)
}

function showModal() {
	modal.className += 'modal'
	modalResultaat.innerHTML = 'Je favoriete team heeft gewonnen met een score van: ' + teamA + ' > ' + teamB
}


function hideModal() {
	modal.className = ''
}