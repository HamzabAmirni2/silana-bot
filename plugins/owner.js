import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212624855939
*instagram:*\nhttps://instagram.com/hamza___boyka_

*whastsapp :*\nhttps://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X

*facebook page:*\nwww.facebook.com/profile.php?id=1000635385520

*script bot :* github.com/noureddineouafy

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
