import 'normalize.css/normalize.css'
import './styles/styles.css'
import Promise from 'promise-polyfill'
import 'whatwg-fetch'

if (!window.Promise) {
	window.Promise = Promise;
  }

import app from './components/init'
import api from './components/api'

(function() {
	app.init()
})()

console.log('derip')