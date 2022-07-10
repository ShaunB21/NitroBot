const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES

    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.login(process.env.TOKEN)