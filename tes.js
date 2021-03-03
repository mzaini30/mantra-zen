const mantra = require('.')
const server = 'https://database.saitama.my.id/sql.php'
const tes = '6572e865a36b557c26d54c6b458a882d' // id, nama, alamat
async function dapatkan(){
	let data = await mantra(`
		select *
		from database_${tes}
	`, server)
	// data = await data
	console.log(data)
}
dapatkan()