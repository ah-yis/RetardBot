const { MessageManager } = require("discord.js")

module.exports = {
    name: 'die',
    aliases: ["commands", "cmd"],
    description: "my commands",
    execute(message, args){

        if(message.member.roles.cache.has('831426445544914954')){
            message.channel.send('Attempting to murder bot...')
            Node.exit

        } else {
            message.channel.send('bro you dont even have permissions to murder this bot go away')
        }
       
    }
}





