const Discord = require("discord.js")
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const path = require("path")

module.exports = {
    name: 'shutup',
    description: "This command bans a member!",
    execute(message, args){
        const { voice } = message.member

        if (!voice.channelID){
            message.reply('you aint in a voice channel noob')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play('reallyshutup.mp3')
        })
    }
}









