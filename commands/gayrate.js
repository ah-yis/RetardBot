const {Discord} = require("discord.js")



module.exports = {
    name: 'gayrate',
    description: "gayrate",
    execute(message, args, Discord){
        const gayValue = Math.floor(Math.random() * 100)
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('GayRater3000')
        .setDescription('Wanna find out how gay YOU are?!')
        .addFields(
            {name: 'Gay-O-Meter', value: `It seems the Gay-O-Meter has spoken! You are ${gayValue}% gay! :rainbow_flag:`},
        )
        .setFooter(`RetardBotReborn Gay Meter. (you are ${gayValue}% gay)`)
        message.channel.send(newEmbed);

    }
}