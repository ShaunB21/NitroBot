const board = require("../board");
module.exports = {
    name: 'move',
    description: "Connect four game",
    async execute(interaction, args) {

        const boardMessage = await interaction.channel.send('Loading...');
        board.boardArray[0][7] = ':red_circle:';
        printBoard(boardMessage, board.boardArray);

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