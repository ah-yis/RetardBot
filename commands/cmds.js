const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'cmds',
    description: "retarded",
    aliases: ['help', 'commands'],
    async execute(client, message, args) {
        message.channel.send(`${message.author}, check out the website for information: https://ah-yis.github.io/RetardBot/`)
    }
}