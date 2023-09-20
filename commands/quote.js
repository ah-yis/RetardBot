module.exports = {
    name: 'quote',
    description: "random quotes",
    execute(message, args){
        const messages = [`"Vacate my throne, or I'll soak these sands with your blood."\n                                                                                   -Mahatma Ghandi`,
        `"I ATE MY SIS."\n          -Taboii the Cannibal`,
        `"Yesterday I hacker-man-ed my eksboks."\n                                                -weird hakur man`,
        `"I will step on your toes and crush them."\n                                                 -an unknown threatening ROBLOX Player`,
        `"24 in 24hr clokk."\n                 -Big Brain Man`,
        `"When ur a dog."\n         -Wise Tall Man`,
        `"Cumander."\n          -some guy by the name of Shaun or something`,
        `"Write a but."\n          -some smut addict`,
        `"when there is online."\n          -an inspirational man `,
        `"bueh."\n   -some guy who scored last place in spellbee`,
        `"rocks are really old"\n                          -Wumpus the philosopher`,
        `"cumsparasee"\n                     -sequel by shaun`,
        `"loo"\n   -smart science man`,
        `"all shall be quoted one day"\n                                        -a great philosophers`,
        `"So once u device to Come back it'll be perfect"\n                                                             -huge brain man`,
        `"bruvver"\n          - the same guy who scored last place in spellbee`,
        `"He just speedran a chicken wing, or a leg, whatever it is"\n                                                                             - Shaun the Cumander`]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage)

    }
}




