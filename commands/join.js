const config = require("../structures/config");
module.exports = {
    name: 'join',
    description: "Connect four game",
    async execute(interaction, args, userId) {
        var found = false;
        if (config.players.length == 0) {
            config.players.push(userId);
            interaction.channel.send('User joined - awaiting another player');
        } else if (config.players.length > 0) {
            for (var i = 0; i <= config.players.length; i++) {
                if (config.players[i] == userId) {
                    found = true;
                    break;
                }
            }
            if (found == true) {
                interaction.channel.send('User has already joined');
            } else if (found == false) {
                config.players.push(userId);
                if (config.players.length >= 2) {
                    console.log('All players have joined')
                    config.ready = true;
                    interaction.channel.send('Players full. Type "n.begin" to begin the game');

                }
            }

        }
    }
}