/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://github.com/epanshop4',
}

// Apikey Website Api
global.APIKeys = {
	'https://github.com/epanshop4': 'Your Key',
}

// Other
global.owner = ['62882006377070','62882006377070','62882006377070']
global.premium = ['62882006377070']
global.ownername = '𝘔𝘶𝘩𝘢𝘮𝘢𝘥𝘌𝘱𝘢𝘯'
global.botname = '𝘝𝘶𝘻𝘮𝘮𝘔𝘶𝘭𝘵𝘪𝘋𝘦𝘷𝘪𝘤𝘦'
global.footer = '𝘔𝘶𝘩𝘢𝘮𝘢𝘥𝘌𝘱𝘢𝘯'
global.ig = 'https://instagram.com/epannnotketche_'
global.email = 'epanshop4@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.myweb = 'https://vt.tiktok.com/ZSdMJDNJ9/'
global.packname = '𝘔𝘶𝘩𝘢𝘮𝘢𝘥 𝘌𝘱𝘢𝘯'
global.author = '𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘉𝘰𝘵 𝘉𝘺 𝘔𝘶𝘩𝘢𝘮𝘢𝘥 𝘌𝘱𝘢𝘯'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
