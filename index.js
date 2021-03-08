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
async function post(perintah, server){
	const body = new FormData
	body.append('sql', btoaPro(perintah))
	let olah = await fetch(server, {
		method: 'post',
		body
	})
	olah = await olah
	return olah
}
module.exports = mantra, {post}