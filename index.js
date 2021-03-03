// const btoa = require('btoa')
// const FormData = require('form-data')
// const fetch = require('node-fetch')

function btoaPro(x){
	return btoa(btoa(encodeURIComponent(x)))
}
async function mantra(perintah, server){
	const body = new FormData
	body.append('sql', btoaPro(perintah))
	let olah = await fetch(server, {
		method: 'post',
		body
	}).then(x => x.json())
	olah = await olah
	return olah
}
module.exports = mantra