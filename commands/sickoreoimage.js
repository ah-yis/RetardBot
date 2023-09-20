const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'sickoreoimage',
    description: "retarded",
    execute(message, args){
        const botFileAttachment = new MessageAttachment('./IMG_1029.jpeg')
        message.channel.send(message.author, botFileAttachment)
    }
}