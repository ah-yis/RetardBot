const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER"] });

const readyHandler = require('./events/client/ready');
const prefix = "-";
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
require("dotenv").config();
const replace = require('replace-in-file');
const guildID = '820016164763598909';
const ms = require('ms');
const mongoose = require('mongoose');

readyHandler(client);

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.on("message", (message) => {
    const messageContent = message.content.toLowerCase();
    if (messageContent.includes("<@&971876515669217350>")) {
        var memberList = [];
        message.guild.members.cache.forEach(member => memberList.push(member.id));
        message.channel.send(`<@${memberList[Math.floor(Math.random() * memberList.length)]}>`);
    }
});

client.on("message", (message) => {
    const messageContent = message.content.toLowerCase();
    if (messageContent.includes("retard bot is retarded")) {
        message.channel.send("thanks captain obvious");
    }
});

client.on("message", (message) => {
    const messageContent = message.content.toLowerCase();
    if (messageContent.includes("villager")) {
        message.channel.send("it's villager, dumbass");
    }
});

client.on("message", (message) => {
    const messageContent = message.content.toLowerCase();
    if (messageContent.includes("funnymessage66767766sothatnobodyaccidentallyfindsthis")) {
        message.channel.send("fuck you");
    }
});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB Database!");
}).catch((err) => {
    console.log(err);
});

cheapworkresponses = [
    'You gave handjobs in the dark alleyways for $', 'You sold your soul for $', "You got a job at McDonald's for $",
    "You worked as a prostitute and got $", "You worked at a Chinese sweatshop and made $", "You mugged a random guy and got $",
]

goodworkresponses = [
    "You sold NFT's and made $", "You tried to mine bitcoin and then sold it for $", "You got into the human trafficking business (allegedly) and made $",
    "You got into the organ trafficking business (allegedly) and made $", "You got into the sex trafficking business (allegedly) and made $",
    "You robbed a really nice looking house and sold his stuff for $", "You robbed the local 7/11 and made $",
]

realjobresponses = [
    "You went out fishing and found a ", "You went out hunting and brought back a",
]

client.login(process.env.DISCORD_TOKEN);
