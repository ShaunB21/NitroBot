const config = require("../structures/config");
const printBoard = require("../functions/printBoard");
module.exports = {
    name: 'begin',
    description: "Connect four game",
    async execute(interaction, args, userId) {
        try {
            if (config.ready == true) {
                config.player1 = config.players[0];
                config.player2 = config.players[1];
                await printBoard.printBoard(interaction, config.boardArray);
                config.currentGame = true;
            } else {
                throw new TypeError("Not ready")
            }
        } catch (e) {
            await interaction.channel.send('Game not ready');
        }
    }
};