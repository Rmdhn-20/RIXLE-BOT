const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["katasenja"],

type: ["quotes"],
useLimit: true,
description: "quotes kata Senja",
utilisation: userbot.prefix + "katasenja",

async execute(m) {
 let { conn, text } = data

 let tolol = await kntl('https://zenzapi.xyz/api/katasenja?apikey=exz123')
 let dot = await tolol.json()
 let json = dot.result.message

J = `
${json}
`
conn.sendButton(m.chat, J, userbot.packname, `/Next➡️`, `katasenja`, m)

}
}
