const config = require("../structures/config");
const printBoard = require("../functions/printBoard");
module.exports = {
    name: 'move',
    description: "Connect four game",
    async execute(interaction, args, userId) {
        try {
            if (config.currentGame == true) {
                column = args - 1;
                for (var i = 5; i > -1; i--) {
                    if (config.boardArray[i][column] == ':white_circle:') {
                        move = i;
                        break;
                    }
                }
                if (config.turn % 2 == 0) {
                    if (userId == config.player2) {
                        config.boardArray[move][column] = ':blue_circle:';
                        config.turn = config.turn + 1;
                        await printBoard.printBoard(interaction, config.boardArray);
                    } else {
                        await interaction.channel.send('Not your turn');
                    }
                } else {
                    if (userId == config.player1) {
                        config.boardArray[move][column] = ':purple_circle:';
                        config.turn = config.turn + 1;
                        await printBoard.printBoard(interaction, config.boardArray);
                    } else {
                        await interaction.channel.send('Not your turn');
                    }
                }
            } else {
                throw new TypeError("No current game")
            }
        } catch (e) {
            interaction.channel.send('No game in progress');
        }
    }
};