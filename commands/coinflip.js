const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flips a coin'),
    async execute(interaction) {
        x = (Math.floor(Math.random() * 1));
        if (x == 1) {
            await interaction.reply('Heads');
        } else {
            await interaction.reply('Tails');
        }
    },
};