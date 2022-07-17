const { MessageActionRow, MessageButton } = require('discord.js');

var board = [
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:']

];
var end = false;

module.exports = {
    name: 'connectfour',
    description: "Connect four game",
    async execute(message, args) {
        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('one')
                .setLabel('1')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('two')
                .setLabel('2')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('three')
                .setLabel('3')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('four')
                .setLabel('4')
                .setStyle('PRIMARY'),
            );
        const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('five')
                .setLabel('5')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('six')
                .setLabel('6')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('seven')
                .setLabel('7')
                .setStyle('PRIMARY'),
                new MessageButton()
                .setCustomId('eight')
                .setLabel('8')
                .setStyle('PRIMARY'),
            );
        const boardMessage = await message.channel.send('Loading...', { components: [row1, row2] });
        printBoard(boardMessage);
    }
};

async function printBoard(boardMessage) {
    var boardString = '';
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            boardString = boardString + board[i][j];
        }
        boardString = boardString + '\n'
    }
    boardMessage.edit(':one::two::three::four::five::six::seven::eight:' + '\n' + boardString)

}