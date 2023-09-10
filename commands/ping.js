module.exports = {
    name: 'ping',
    description: 'Retarded',
    execute(message, args) {
        for (let i = 0; i < 1000; i++) {
            message.channel.send('dollars');
        }
    }
};
