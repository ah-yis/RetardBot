module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`${memberTarget} got that ban hehe`);
        }else{
            message.channel.send(`stop tryna ban nobody please`);
        }
    }
}