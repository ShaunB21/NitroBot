const config = require("../structures/config");
module.exports = {
    name: 'begin',
    description: "Connect four game",
    async execute(interaction, args) {
        try {
            if (config.ready == true) {
                config.player1 = config.players[0];
                config.player2 = config.players[1];
                const boardMessage = await interaction.channel.send('Loading...');
                printBoard(boardMessage, config.boardArray);
                config.currentGame = true;
            } else {
                throw new TypeError("Not ready")
            }
        } catch (e) {
            await interaction.channel.send('Game not ready');
        }
    }
};

async function printBoard(boardMessage, boardArray) {
    var boardString = '';
    for (var i = 0; i < boardArray.length; i++) {
        for (var j = 0; j < boardArray[i].length; j++) {
            boardString = boardString + boardArray[i][j];
        }
        boardString = boardString + '\n'
    }
    boardMessage.edit(':one::two::three::four::five::six::seven::eight:' + '\n' + boardString)

}