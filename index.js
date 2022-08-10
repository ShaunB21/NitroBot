const Discord = require('discord.js');
const config = require("./structures/config");
const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

const prefix = 'n.';
const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is ready');
});

client.on('message', interaction => {
    if (!interaction.content.startsWith(prefix) || interaction.author.bot) return;
    user = interaction.author
    userId = user.id
    const args = interaction.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'start') {
        interaction.channel.send('Type "n.join" to join the game. Maximum 2 players');
        config.started = true;
        config.currentGame = false;
        config.players = [];
        config.ready = false;
        client.commands.get('start').execute(interaction, args);
    }

    if (command === 'join' & config.started === true) {
        client.commands.get('join').execute(interaction, args, userId);
    } else if (command === 'join' & config.started === false) {
        interaction.channel.send('No game has been started. Type "n.start" to start a game');
    }

    if (command === 'begin' & config.ready === true) {
        config.currentGame = true;
        client.commands.get('begin').execute(interaction, args);
    }

    if (command === 'move' & config.currentGame === true) {
        client.commands.get('move').execute(interaction, args, userId);

    } else if (command === 'move' & config.currentGame === false) {
        interaction.channel.send('No game in progress');
    }

});

client.login(process.env.TOKEN);