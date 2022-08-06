const { boardArray } = require("../board");
const board = require("../board");
module.exports = {
    name: 'move',
    description: "Connect four game",
    async execute(interaction, args) {
        const boardMessage = await interaction.channel.send('Loading...');
        column = args - 1;
        move = findMove(column);
        board.boardArray[move][column] = ':purple_circle:';
        printBoard(boardMessage, board.boardArray);
    }
};

function findMove(column) {
    for (var i = 5; i > -1; i--) {
        if (boardArray[i][column] == ':white_circle:') {
            move = i;
            return move;
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