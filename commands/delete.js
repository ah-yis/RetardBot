module.exports = {
    name: 'delete',
    description: "delete",
   async  execute(message, args) {
        if (!args[0]) return message.reply("enter an amount of messages to slaughter, btw they must be below 14 days old");
 
        if(isNaN(args[0])) return message.reply("are you ok because this aint a number, btw they must be below 14 days old");
 
        if(args[0] > 100) return message.reply("sorry 100 messages is the max, btw they must be below 14 days old");
        
        if(args[0] < 2) return message.reply("bro you need to input a number that is above 1 because inputting only 1 just deletes the command you sent in chat and thats not quite what you want, btw they must be below 14 days old");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   