const { Command } = require('discord.js-commando');

module.exports = class Thanks extends Command {
    constructor(client) {
        super(client, {
            name: 'thanks',
            group: 'thanks',
            memberName: 'thanks',
            description: "Einstein thanks you",
        });
    }

    async run(message, args) {
        message.reply('Thanks');
    }
}