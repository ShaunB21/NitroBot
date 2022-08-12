const config = require("../structures/config");
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
                        printBoard(interaction, config.boardArray);
                    } else {
                        await interaction.channel.send('Not your turn');
                    }
                } else {
                    if (userId == config.player1) {
                        config.boardArray[move][column] = ':purple_circle:';
                        config.turn = config.turn + 1;
                        printBoard(interaction, config.boardArray);
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

async function printBoard(interaction, boardArray) {
    var boardString = '';
    for (var i = 0; i < boardArray.length; i++) {
        for (var j = 0; j < boardArray[i].length; j++) {
            boardString = boardString + boardArray[i][j];
        }
        boardString = boardString + '\n'
    }
    await interaction.channel.send(':one::two::three::four::five::six::seven::eight:' + '\n' + boardString)

}