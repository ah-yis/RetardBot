const profileModel = require('../../models/profileSchema');

module.exports = async (client, discord, member) => {
    try {
        await profileModel.create({
            user: member,
            userID: member.id,
            serverID: member.guild.id,
            coins: 1000,
            bank: 0,
            xp: 0,
        });
    } catch (error) {
        console.error('Error creating profile:', error);
    }
};
