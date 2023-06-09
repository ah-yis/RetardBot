const Client = require('discord.js');
const Discord = require('discord.js');
const MessageAttachment = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = "-"
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
require("dotenv").config();
const replace = require('replace-in-file');
const guildID = '820016164763598909'
const ms = require('ms');

const statusList = ["nothing!", "your mom", "epic gaming games", "Sonic CD", "Ultra rich billionare rich money simulator",
    "Who Asked Tycoon", "nothing, get lost.", "Sonic the Hedghehog (2006)", "Playing Playing Playing Playing Playing", "MineCrap",
    "Deltarune", "Minecraft", "Spotify", "Breaking Bad Tycoon on Roblox", "Sonic Mania", "your dad", "Half Life - Source", "Desert Bus for the Sega CD", "Sonic's Schoolhouse", "Sonic Generations", "joe nuts", "with your balls :troll:",
    "RPCS3", "Cemu", "with me balls", ""]



client.commands = new Discord.Collection();

client.on("message", (message) => {                                                                 // Someone
    const messageContent = message.content.toLowerCase()
    if (messageContent.includes("<@&971876515669217350>")) {
        var memberList = [];
        message.guild.members.cache.forEach(member => memberList.push(member.id))
        message.channel.send(`<@${memberList[Math.floor(Math.random() * memberList.length)]}>`);
    }
});


client.on("message", (message) => {
    const messageContent = message.content.toLowerCase()
    if (messageContent.includes("retard bot is retarded")) {
        message.channel.send("thanks captain obvious");
    }
});

client.on("message", (message) => {
    const messageContent = message.content.toLowerCase()
    if (messageContent.includes("villager")) {
        message.channel.send("its vilgager dumbass");
    }
});

/*
client.on("message", (message) => {
    message.delete();
});
*/

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', async () => {
    console.log('RetardBotReborn has been restarted/started.');

    randomMess = statusList[Math.floor(Math.random() * statusList.length)];

    client.user.setActivity(randomMess);

    /*
    function SetActivityType(){
        setInterval(() => {
        const randomAct = statusList[Math.floor(Math.random() * statusList.length)];
        client.user.setActivity(randomMess2);
        }, 300000);
    }
    */

    function SetActivity() {
        setInterval(() => {
            const randomMess2 = statusList[Math.floor(Math.random() * statusList.length)];
            client.user.setActivity(randomMess2);
        }, 300000);
    }
    SetActivity();
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'delete') {
        client.commands.get('delete').execute(message, args);
    }

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }

    if (command === 'author') {
        client.commands.get('author').execute(message, args);

    }

    if (command === 'cmds') {
        client.commands.get('cmds').execute(message, args, Discord);

    }

    if (command === 'bestyoutubechannel') {
        client.commands.get('bestyoutubechannel').execute(message, args);

    }

    if (command === 'retard') {
        client.commands.get('retard').execute(message, args);

    }

    if (command === 'retardbotdumb') {
        client.commands.get('retardbotdumb').execute(message, args);

    }

    if (command === 'vibe') {
        client.commands.get('vibe').execute(message, args);

    }

    if (command === 'dontcare') {
        client.commands.get('dontcare').execute(message, args);

    }

    if (command === 'quote') {
        client.commands.get('quote').execute(message, args);

    }

    if (command === 'cringebackstory') {
        client.commands.get('cringebackstory').execute(message, args);


    }

    if (command === 'googleimage') {
        client.commands.get('googleimage').execute(message, args);

    }

    if (command === 'die') {
        client.commands.get('die').execute(message, args);

    }

    if (command === 'decisionmaker3000') {
        client.commands.get('decisionmaker3000').execute(message, args);

    }

    if (command === 'dumbass') {
        client.commands.get('dumbass').execute(message, args);

    }

    if (command === 'shame') {
        client.commands.get('shame').execute(message, args);

    }

    if (command === 'unshame') {
        client.commands.get('unshame').execute(message, args);

    }

    if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    }

    if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    }

    if (command === 'gayrate') {
        client.commands.get('gayrate').execute(message, args, Discord);

    }

    if (command === 'commands') {
        client.commands.get('cmds').execute(message, args, Discord);

    }

    if (command === 'help') {
        client.commands.get('cmds').execute(message, args, Discord);

    }

    if (command === 'chadchecker') {
        client.commands.get('chadchecker').execute(message, args, Discord);

    }

    if (command === 'grabavatar') {
        client.commands.get('grabavatar').execute(message, args, Discord);

    }

    if (command === 'showmainjs') {
        client.commands.get('showmainjs').execute(message, args, Discord, MessageAttachment);

    }

    if (command === 'sickoreoimage') {
        client.commands.get('sickoreoimage').execute(message, args, Discord, MessageAttachment);

    }

    if (command === 'hack') {
        client.commands.get('hack').execute(message, args, Discord, MessageAttachment);

    }

    if (command === 'headsortails') {
        client.commands.get('headsortails').execute(message, args, Discord);
    }

    if (command === 'wartgod') {
        client.commands.get('wartgod').execute(message, args, Discord, MessageAttachment);
    }

    if (command === 'funfact') {
        client.commands.get('funfact').execute(message, args, Discord, MessageAttachment);
    }

    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

    if (command === 'annoy') {
        client.commands.get('annoy').execute(message, args, Discord);
    }

    if (command === 'joingeneral') {
        client.commands.get('joingeneral').execute(message, args, Discord);
    }

    if (command === 'nodeerrorlol') {
        client.commands.get('nodeerrorlol').execute(message, args, Discord);
    }

    if (command === 'funnymeme') {
        client.commands.get('funnymeme').execute(message, args, Discord);
    }

    if (command === 'insult') {
        client.commands.get('insult').execute(message, args, Discord);
    }

    if (command === 'shutup') {
        client.commands.get('shutup').execute(message, args, Discord);
    }

    if (command === 'bigword') {
        client.commands.get('bigword').execute(message, args, Discord);
    }

    if (command === 'allstar') {
        client.commands.get('allstar').execute(message, args, Discord);
    }

    if (command === 'reachtheme') {
        client.commands.get('reachtheme').execute(message, args, Discord);
    }

    if (command === 'cetheme') {
        client.commands.get('cetheme').execute(message, args, Discord);
    }

    if (command === 'stopsong') {
        client.commands.get('stopsong').execute(message, args, Discord);
    }

    if (command === 'covenantdance') {
        client.commands.get('covenantdance').execute(message, args, Discord);
    }

    if (command === 'spamvc') {
        client.commands.get('spamvc').execute(message, args, Discord);
    }

    if (command === 'warthogrun') {
        client.commands.get('warthogrun').execute(message, args, Discord);
    }

    if (command === 'remindme') {
        client.commands.get('remindme').execute(message, args, Discord);
    }

    if (command === 'coolelevatormusic') {
        client.commands.get('coolelevatormusic').execute(message, args, Discord);
    }

    if (command === 'drawacock') {
        client.commands.get('drawacock').execute(message, args, Discord);
    }

    if (command === 'sendsite') {
        client.commands.get('').execute(message, args, Discord);
    }

    if (command === 'changestatus') {
        client.commands.get('changestatus').execute(message, args, Discord, statusList, client);
    }

    if (command === 'tictactoe') {
        client.commands.get('tictactoe').execute(message, args, Discord);
    }

    if (command === 'imagesearch') {
        client.commands.get('imagesearch').execute(message, args, Discord);
    }

    if (command === 'hornychecker') {
        client.commands.get('hornychecker').execute(message, args, Discord);
    }





    if (command === 'controls') {
        client.commands.get('controls').execute(message, args, client, Discord, statusList, client);
    }

});

client.login(`${process.env.DISCORD_TOKEN}`);