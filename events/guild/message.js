const profileModel = require('../../models/profileSchema');

module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                user: message.author.username,
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
                xp: 0,
            });
            profile.save();
        }
    } catch (err) {
        console.log(err);
    }

    console.log("Profile Data:", profileData);

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    console.log("Command:", cmd);

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, { Discord, profileData });
};


