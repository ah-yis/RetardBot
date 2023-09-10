const profileModel = require('../models/profileSchema'); // Adjust the path if needed

module.exports = {
    name: 'balance',
    aliases: ['bal', 'cash', 'bank'],
    description: 'Get the user balance',
    async execute(client, message, args, Discord) {
        try {
            // Fetch the user's profile data from the database
            let profileData = await profileModel.findOne({ userID: message.author.id });

            if (!profileData) {
                message.channel.send("You don't have a profile yet!");
                return;
            }

            message.channel.send(`**You have:**\n$${profileData.coins} in your wallet\n$${profileData.bank} in your bank`);
        } catch (error) {
            console.error("Error fetching profile data:", error);
            message.channel.send("An error occurred while fetching your profile data.");
        }
    }
};
