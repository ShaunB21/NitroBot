const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { Message, Channel } = require('discord.js');

var board = [
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:'],
    [':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:', ':white_circle:']

];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('connectfour')
        .setDescription('Play connect four'),
    async execute(interaction) {
        const message = await interaction.reply({
            content: ':one::two::three::four::five::six::seven::eight:',
            fetchReply: true
        });
        printBoard(message);
        message.react('1️⃣');
        message.react('2️⃣');
        message.react('3️⃣');
        message.react('4️⃣');
        message.react('5️⃣');
        message.react('6️⃣');
        message.react('7️⃣');
        message.react('8️⃣');
    }
};

async function printBoard(message) {
    var boardString = '';
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            boardString = boardString + board[i][j];
        }
        boardString = boardString + '\n'
    }
    message.edit(':one::two::three::four::five::six::seven::eight:' + '\n' + boardString)

}