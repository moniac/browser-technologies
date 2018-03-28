var teamA = document.querySelector('main aside:first-of-type input').value
var teamB = document.querySelector('main aside:last-of-type input').value
var main = document.querySelector('main')
var firstAside = document.querySelector('main aside:first-of-type')
var modal = document.querySelector('section')
var modalClose = document.querySelector('section p')

var resultaatBox = document.createElement('p')

resultaatBox.textContent = 'Je favoriete team heeft gewonnen met een score van: ' + teamA
main.insertBefore(resultaatBox, firstAside)

function showModal() {
	modal.className += 'modal'
}


function hideModal() {
	modal.className = ''
}

showModal()

modalClose.addEventListener('click', hideModal)

console.log(teamA)
console.log(teamB)

// if ("setTimeout" in window) {
// 	setTimeout(function() {
// 		if (teamA > teamB) {
// 			alert('Woooo, je favoriete team heeft gewonnen met een score van: ' + teamA)
// 		}
// 	}, 3000);
// }

// Push.create("Hello Mo!", {
//     body: "Je favoriete team heeft gewonnen nerd",
//     icon: '/icon.png',
//     timeout: 4000,
//     onClick: function () {
//         window.focus();
//         this.close();
//     }
// });

console.log(Notification.permission)

Notification.requestPermission(function (permission) {
	// If the user accepts, let's create a notification
	if (permission === "granted") {
	  var notification = new Notification("Hi there!");
	}
  });