const {Discord} = require("discord.js")



module.exports = {
    name: 'drawacock',
    description: "ppsize",
    execute(message, args, Discord){
        const messageSender = message.author.id;
        const lenghtOfCock = Math.floor(Math.random() * 20);
        const messageToSend = "8" + "=".repeat(lenghtOfCock) + "D";

        if (messageSender == 526767441548673025, 725683510697918484){ // Big
            message.channel.send("8============================================================================D");
        }else if (messageSender == 878349699004923915){ // Small
            message.channel.send("8D");
        } else {
            message.channel.send(messageToSend)
        }
       
    }
}