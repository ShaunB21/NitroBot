module.exports = {
    name: 'help',
    description: "Connect four game",
    async execute(interaction, args, userId) {
        interaction.channel.send('Commands:' +
            '\n' + 'n.start to start a game' +
            '\n' + 'n.join to join a game' +
            '\n' + 'n.begin to begin a game' +
            '\n' + 'n.move to make your move')
    }

}