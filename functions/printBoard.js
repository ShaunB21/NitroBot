module.exports.printBoard = async(interaction, boardArray) => {
    var boardString = '';
    for (var i = 0; i < boardArray.length; i++) {
        for (var j = 0; j < boardArray[i].length; j++) {
            boardString = boardString + boardArray[i][j];
        }
        boardString = boardString + '\n'
    }
    interaction.channel.send(':one::two::three::four::five::six::seven::eight:' + '\n' + boardString)
}