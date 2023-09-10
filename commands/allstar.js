const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

const path = require('path');

module.exports = {
    name: 'allstar',
    description: 'This command bans a member!',
    execute(message, args) {
        const { voice } = message.member;

        if (!voice.channelID) {
            message.reply('you ain\'t in a voice channel noob');
            return;
        }

        voice.channel.join().then((connection) => {
            connection.play('allstar.mp3');
        });
    }
};
