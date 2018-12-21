const path = require('path');
const commando = require('discord.js-commando');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const bot = new commando.Client({
    commandPrefix: config.defaultPrefix,
    owner: config.ownerId,
    disableEveryone: true,
    unknownCommandResponse: false,
});

bot.registry
    .registerGroups([
        ['random', 'Random'],
        ['math', 'Math'],
        ['thanks', 'Thanks'],
        ['timer', 'Time']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

bot.on('ready', () => {
    console.log('All systems go, einstein-bot is ready');
    bot.user.setGame('fuckin science');
});

bot.login(config.discordToken);
