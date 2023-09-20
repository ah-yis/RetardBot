module.exports = {
    name: 'decisionmaker3000',
    description: "random quotes",
    execute(message, args){
        const messages = ["HELL YES", "sure", "maybe", "go away", "nah", "not fully sure", "HELL NO"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage)

    }
}