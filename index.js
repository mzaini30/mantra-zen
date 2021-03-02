const btoaPro = require('btoa-pro')
async function mantra(perintah, server){
	const body = new FormData
	body.append('sql', btoaPro(perintah))
	let hasil = await fetch(server, {
		method: 'post',
		body
	}).then(x => x.json())
	hasil = await hasil
	return hasil
}
module.exports = mantra