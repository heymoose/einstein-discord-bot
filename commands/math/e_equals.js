const { Command } = require('discord.js-commando');

module.exports = class eEquals extends Command {
    constructor(client) {
        super(client, {
            name: 'e_equals',
            group: 'math',
            memberName: 'e_equals',
            description: "Einstein reminds you of the theory of relativity",
            aliases: ['e=']
        });
    }

    async run(message, args) {
        message.reply('mc^2 you idiot');
    }
}