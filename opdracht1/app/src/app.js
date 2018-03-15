import 'normalize.css/normalize.css'
import './styles/styles.css'

import app from './components/init'
import api from './components/api'

import FontFaceObserver from 'fontfaceobserver'

(function() {
	app.init()
})()

var font = new FontFaceObserver('Roboto');

font.load().then(function () {
  document.querySelector('body').classList.add('font-ready')
});