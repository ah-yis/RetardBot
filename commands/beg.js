const profileModel = require("../models/profileSchema");

const beggingResponses = [
    "You pretended to be disabled and got $",
    "You pretended to be homeless and made $",
    "You found some spare change worth $",
    "Here you go you financially drained loser, $"
];

module.exports = {
    name: "beg",
    aliases: ["superhardwork"],
    description: "Screw you guys I'm going home",
    async execute(client, message, args, cmd, Discord, profileData) {
        const totallyLegitPaycheck = Math.floor(Math.random() * 50) + 1;
        const begMessage = beggingResponses[Math.floor(Math.random() * beggingResponses.length)];

        const response = await profileModel.findOneAndUpdate(
            { userID: message.author.id },
            { $inc: { coins: +totallyLegitPaycheck } }
        );

        return message.channel.send(`${begMessage}${totallyLegitPaycheck}`);
    },
};
