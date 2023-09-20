const profileModel = require("../models/profileSchema");

const beggingResponses = [
    "You searched between your couch and found $",
    "You searched inside some guys car and found $",
    "You searched in your own car and found like $",
    "You found some cash in your wallet, like $",
    "You checked your pockets and found $",
];

module.exports = {
    name: "search",
    aliases: [],
    description: "Screw you guys I'm going home",
    async execute(client, message, args, cmd, Discord, profileData) {
        const totallyLegitPaycheck = Math.floor(Math.random() * 15) + 1;
        const begMessage = beggingResponses[Math.floor(Math.random() * beggingResponses.length)];

        const response = await profileModel.findOneAndUpdate(
            { userID: message.author.id },
            { $inc: { coins: +totallyLegitPaycheck } }
        );

        return message.channel.send(`${begMessage} ${totallyLegitPaycheck}`);
    },
};
