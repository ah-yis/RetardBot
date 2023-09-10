async function attemptStealFromUser(message, targetUser, profileData) {
    console.log("Attempting to steal from user:", targetUser.username);

    // Check if the thief has a profile
    const thiefProfile = await profileModel.findOne({ userID: message.author.id });

    console.log("Thief Profile:", thiefProfile);

    if (!thiefProfile) {
        return message.channel.send(
            "You don't have a profile in the database. You can generate one by running any command on this bot."
        );
    }

    const caughtByPolice = Math.random() < 1 / 8;

    console.log("Caught by Police:", caughtByPolice);

    if (caughtByPolice) {
        return message.channel.send(
            `You tried to steal from ${targetUser.username}, but they saw you and called the cops. You're in jail now.`
        );
    }

    const stolenAmount = Math.floor(Math.random() * 500) + 1;

    console.log("Stolen Amount:", stolenAmount);

    await profileModel.findOneAndUpdate(
        { userID: message.author.id }, // Update the thief's profile, not the target user's profile
        { $inc: { coins: stolenAmount } }
    );

    return message.channel.send(`You successfully stole $${stolenAmount} from ${targetUser.username}!`);
}

async function attemptStealFromTarget(message, target) {
    console.log("Attempting to steal from target:", target);
    // Implement stealing from predefined targets
    // Here you can write the logic to steal from the specified target
    // For example, you can have separate cases for "Bank" and "Gas Station" and perform the appropriate actions
    // based on the target.
}

module.exports = {
    name: "steal",
    aliases: ["rob", "commitabadcrimelolz"],
    description: "Attempt to steal from a target",
    async execute(client, message, args, cmd, Discord, profileData) {
        const targetIndex = Math.floor(Math.random() * stealTargets.length);
        const target = stealTargets[targetIndex];

        if (target === "User") {
            // Check if a user was mentioned
            const mention = message.mentions.users.first();

            if (!mention) {
                return message.channel.send("Please mention the user you want to steal from.");
            }

            // Attempt to steal from the mentioned user
            await attemptStealFromUser(message, mention, profileData);
        } else {
            // Steal from the predefined target
            await attemptStealFromTarget(message, target);
        }
    }
};
