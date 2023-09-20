module.exports = {
    name: 'funfact',
    description: "random quotes",
    execute(message, args){
        const messages = [
            `FUN FACT: Shaun is a dumbass!`,`FUN FACT: insert filler text here`,
            `FUN FACT: Whales used to live on land!`,`FUN FACT: You are a clown! :clown:`,`FUN FACT: Wasps have stingers that DON'T get replaced!`,`FUN FACT: If you're bored or need help, yell for Qas (unless hes offline then fuck off)`,`FUN FACT: These facts are brought to you by Taboii!`,
            `FUN FACT: Last night I was doing your mom!`,`FUN FACT: Normally after reading this, you should start breathing manually!`,`FUN FACT: Left-handed people write better than people with no hands.`,`FUN FACT: ||youve been rickrolled mudafukka\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and, desert you||`,
            `FUN FACT: RetardBot's tag in Discord is #9966`,`FUN FACT: Starting your sentence with "FUN FACT" normally makes people read your sentence, fact or not!`
        ]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage)

    }
}




