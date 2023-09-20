const {Discord} = require("discord.js")



module.exports = {
    name: 'hornychecker',
    description: "checkchad",
    execute(message, args, Discord){
        const messageSender = message.author.id;
        const chadAmount = Math.floor(Math.random() * 100)
        if (messageSender ==  878349699004923915){ 
            message.channel.send("You are 1851957695849476% horny.");
        } else {
            message.channel.send(`You are ${chadAmount}% horny.`)
        }

    }
}