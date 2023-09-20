var { tictactoe } = require('reconlx');

module.exports = {
    name: 'tictactoe',
    execute(message){
        const member = message.mentions.members.first()
            if(!member) return message.channel.send('Specify a member first, idiot.');

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}