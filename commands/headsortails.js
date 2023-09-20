const Discord = require("discord.js")

module.exports = {
    name: 'headsortails',
    description: "random quotes",
    execute(message, args){
        const messages = [`Heads!`,`Tails!`];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const headsOrTailsEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Heads or Tails')
        .setDescription('Randomly chooses heads or tails.')
        .addFields(
            {name: 'Heads or Tails', value: `You got... ${randomMessage}`},
        )

        message.channel.send(headsOrTailsEmbed)

    }
}




