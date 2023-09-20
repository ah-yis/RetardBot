const {Discord} = require("discord.js")



module.exports = {
    name: 'chadchecker',
    description: "checkchad",
    execute(message, args, Discord){
        const messageSender = message.author.id;
        const chadAmount = Math.floor(Math.random() * 100)
        if (messageSender == 526767441548673025, 725683510697918484){ // Big
            message.channel.send("You are 200% chad.");
        }else if (messageSender == 878349699004923915){ // Small
            message.channel.send("You are -4603767% chad.");
        } else {
            message.channel.send(`You are ${chadAmount}% chad.`)
        }

    }
}