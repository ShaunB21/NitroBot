const config = require("../structures/config");
module.exports = {
    name: 'start',
    description: "Connect four game",
    async execute(interaction, args) {
        interaction.channel.send('Type "n.join" to join the game. Maximum 2 players');
        config.started = true;
        config.currentGame = false;
        config.players = [];
        config.ready = false;
    }

}