module.exports = {
    name: 'unbanban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.unban();
            message.channel.send("fine ill just ok");
        }else{
            message.channel.send(`failed.`);
        }
    }
}