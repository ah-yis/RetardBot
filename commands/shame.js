const ms = require('ms');
module.exports = {
    name: 'shame',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Hall of Shame');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(memberTarget.roles.cache);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been given the Hall of Shame role. What an idiot..`);
                return
            }
            memberTarget.roles.remove(memberTarget.roles.cache);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been given the Hall of Shame role for ${ms(ms(args[1]))}. What an idiot..`);

            setTimeout(function () {
                memberTarget.roles.remove(memberTarget.roles.cache);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted after ${ms(ms(args[1]))}.`);
            }, ms(args[1]));
        } else {
            message.channel.send('whos this guy supposed to be');
        }
    }
}