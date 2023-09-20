const { MessageManager } = require("discord.js")
const ms = require('ms');

module.exports = {
    name: 'remindme',
    description: "remind me lmao",
    execute(message, args){
        let time = args[0]

        if (!time){
            return message.channel.send("when i tell you noob")
        }

        const reminder = args.join(" ").slice(args[0].length);

        if (reminder){
            if(!args[1]){
                return message.channel.send("specify a reminder bro")
            }

            message.channel.send(`lmao i set the reminder ig i remind u after ${time}`)
        }

        setTimeout(function(){
            message.channel.send(`${message.author}, bro ur reminder or some shit,${reminder}`)
        }, ms(time));
    }
}





