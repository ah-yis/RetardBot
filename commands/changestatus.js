const {Discord} = require("discord.js")



module.exports = {
    name: 'changestatus',
    description: "ppsize",
    execute(message, args, Discord, statusList, client){
        const messageSender = message.author.id;

        const randomMess = statusList[Math.floor(Math.random() * statusList.length)];

        if (messageSender ==  526767441548673025){
            client.user.setActivity(randomMess);
            message.react("👍");
        } else {
            message.channel.send("You aren't 'ah yis' therefore you are not allowed to do this.");
        }
    }
}