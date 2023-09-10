const Discord = require("discord.js");

module.exports = {
    name: 'controls',
    description: "Controls command",
    async execute(message, args, client, Discord, statusList) {
        const messageSender = message.author.id;

        if (messageSender !== '526767441548673025') {
            message.channel.send("Only the bot owner can do that. For those of you who are brain-dead, the owner is 'ah yis'.");
            message.react('👎');
            return;
        }

        const controlsMessage = await message.channel.send("Pick an action.\n\n:arrows_clockwise: - Custom Status\n🔁 - Restart bot\n:negative_squared_cross_mark: - Crash bot");
        controlsMessage.react("🔃");
        controlsMessage.react("🔁");
        controlsMessage.react("❎");

        const filter = (reaction, user) => {
            return ['🔃', '🔁', '❎'].includes(reaction.emoji.name) && user.id === messageSender;
        };

        const collector = controlsMessage.createReactionCollector(filter, { time: 60000 });

        collector.on('collect', (reaction, user) => {
            if (reaction.emoji.name === '🔃') {
                const randomMess = statusList[Math.floor(Math.random() * statusList.length)];
                client.user.setActivity(randomMess);
                reaction.users.remove(messageSender);
            } else if (reaction.emoji.name === '🔁') {
                collector.stop();
                client.destroy();
                client.login(`${process.env.DISCORD_TOKEN}`);
                reaction.users.remove(messageSender);
            } else if (reaction.emoji.name === '❎') {
                collector.stop();
                client.destroy();
                reaction.users.remove(messageSender);
            }
        });

        collector.on('end', collected => {
            controlsMessage.reactions.removeAll().catch(console.error);
        });

        console.log(`ran controls, id - ${controlsMessage.id}`);
    }
};
