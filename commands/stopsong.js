const Discord = require("discord.js")
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const path = require("path")

module.exports = {
    name: 'stopsong',
    description: "This command bans a member!",
    execute(message, args){
        const { voice } = message.member

        if (!voice.channelID){
            message.reply('you aint in a voice channel noob')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play('nothing.mp3')
        })

        message.channel.send(":ok_hand:")
    }
}









