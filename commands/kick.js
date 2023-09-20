module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("this law breaker has been kicked succesfully");
        }else{
            message.channel.send(`you have failed to kick this man`);
        }
    }
}