const Discord = require("discord.js")

module.exports = {
    name: 'annoy',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            const messageSender = message.author

            message.channel.send(`${memberTarget} wake up`);
            message.channel.send(`${memberTarget} wake up`);
            message.channel.send(`${memberTarget} wake up`);
            message.channel.send(`${memberTarget} wake up`);
            message.channel.send(`${memberTarget} wake up`);
        }else{
            message.channel.send(`you idiot you have to specify a member noob`);
        }
    }
}