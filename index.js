const Discord = require('discord.js');
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

    const args = interaction.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'play') {

        client.commands.get('play').execute(interaction, args);
    }
    if (command === 'move') {

        client.commands.get('move').execute(interaction, args);
    }

});

client.login(process.env.TOKEN);