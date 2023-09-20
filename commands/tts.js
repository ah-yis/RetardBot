const { createAudioPlayer, createAudioResource, joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const { say } = require('discord-tts');

module.exports = {
    name: 'tts',
    description: 'Converts text to speech and plays it in a voice channel.',
    async execute(message, args) {
        if (!message.member.voice.channel) {
            return message.channel.send('You need to be in a voice channel to use this command.');
        }

        const voiceChannel = message.member.voice.channel;
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });

        const textToSpeech = args.join(' ');
        if (!textToSpeech) return message.channel.send('Please provide text to convert to speech.');

        const ttsAudio = createAudioResource(say(textToSpeech));
        const player = createAudioPlayer();

        player.play(ttsAudio);
        connection.subscribe(player);

        player.on('idle', () => {
            connection.destroy();
        });
    },
};
