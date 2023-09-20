module.exports = {
    name: 'unshame',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Hall of shame');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(memberTarget.roles.cache);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been un-shamed.`);
        } else{
            message.channel.send('what that guy doesnt exist man');
        }
    }
}