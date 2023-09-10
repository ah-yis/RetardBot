module.exports = {
    name: 'retardbotdumb',
    description: "retbot is so dumb",
    execute(message, args) {
        message.channel.send("cries in javascript").then((sentMessage) => setInterval(() => { (sentMessage.edit("i will murder your entire family and burn down your house")) }, 5000));
    }
}