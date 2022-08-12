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
    try {
        client.commands.get(command).execute(interaction, args, userId);
    } catch (e) {
        interaction.channel.send('Not a valid command');
    }

});

client.login(process.env.TOKEN);