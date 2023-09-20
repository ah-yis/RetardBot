const profileModel = require("../models/profileSchema");

module.exports = {
    name: "bank",
    aliases: ["deposit", "withdraw"],
    description: "Deposit or withdraw money from your bank",
    async execute(client, message, args, Discord, profileData) {
        const action = args[0]; // Deposit or withdraw
        const amount = parseInt(args[1]); // Amount to deposit or withdraw

        // Check if the action and amount are valid
        if (!action || !amount || isNaN(amount) || amount <= 0) {
            return message.reply("Please provide a valid action (deposit/withdraw) and amount.");
        }

        if (action === "deposit") {
            // Deposit money into the bank
            if (profileData.coins < amount) {
                return message.reply("You don't have enough coins to deposit.");
            }

            profileData.coins -= amount;
            profileData.bank += amount;
            await profileData.save();

            return message.reply(`Successfully deposited ${amount} coins into your bank.`);
        } else if (action === "withdraw") {
            // Withdraw money from the bank
            if (profileData.bank < amount) {
                return message.reply("You don't have enough coins in your bank to withdraw.");
            }

            profileData.coins += amount;
            profileData.bank -= amount;
            await profileData.save();

            return message.reply(`Successfully withdrew ${amount} coins from your bank.`);
        } else {
            return message.reply("Invalid action. Please choose either 'deposit' or 'withdraw'.");
        }
    },
};
