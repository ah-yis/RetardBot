const Discord = require("discord.js")
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const path = require("path")

module.exports = {
    name: 'funnymeme',
    description: "This command bans a member!",
    execute(message, args){
        const { voice } = message.member
        message.channel.send("lol no perms nerd")
        
        setTimeout(function(){ if (!voice.channelID){
            message.reply('you aint in a voice channel noob')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play('funnyjokerickroll1.mp3')
        }) 
        message.channel.send("lol jk")}, 3000);
    }
}









