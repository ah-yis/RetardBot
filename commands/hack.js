const { MessageAttachment, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'hack',
    description: "retarded",
    execute(message, args){
        const target = message.mentions.users.first();
        if (target) {
            if (!args[1]) {
                
                message.channel.send(`Getting ${target}'s login credentials for Discord... 5 Seconds Estimated`).then((messageLogin) => messageLogin.edit(`Credentials found!\nE-Mail: ${target}@yahoo.com\nPassword: ${target}LovesCars@1234`));
                setTimeout(() => {  message.channel.send(`Attempting to search ${target}'s Discord DM's... 2 Seconds Estimated`) }, 2000);
                setTimeout(() => {  message.channel.send(`Obtaining ${target}'s IP Address... 4 Seconds Estimated`) }, 4000);
                setTimeout(() => {  message.channel.send(`Searching in C: directory of ${target}'s Hard Drive... 7 Seconds Estimated`) }, 7000);
                setTimeout(() => {  message.channel.send(`Doxxing ${target}.. 8 Seconds Estimated`) }, 8000);
                setTimeout(() => {  message.channel.send(`Getting Discord Token... 5 Seconds Estimated`) }, 5000);
                setTimeout(() => {  message.channel.send(`Sending mean messages to ${target}'s Twitter account... 5 Seconds Estimated`) }, 5000);
                setTimeout(() => {  message.channel.send(`Sending salty messages to all of ${target}'s friends... 2 Seconds Estimated`) }, 2000);
                setTimeout(() => {  message.channel.send(`Selling ${target}'s data on Dark Web... 6 Seconds Estimated`) }, 6000);
                setTimeout(() => {  message.channel.send(`Praising RetardBotReborn... 4 Seconds Estimated`) }, 4000);
                setTimeout(() => {  message.channel.send(`Finishing up the hack... 10 Seconds Estimated`) }, 10000);
                setTimeout(() => {  message.channel.send(`The dangerous hack is complete. Logging out...`)   }, 20000);
            }
            
        } else {
            message.channel.send('ERROR unable to find user. Please ping a valid user.');
        }
    }
}