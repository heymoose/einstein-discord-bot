const { Command } = require('discord.js-commando');
//const schedule = require('util');

module.exports = class TimerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'timer',
            group: 'random',
            memberName: 'timer',
            description: "Einstein keeps a timer for you",
        });
    }

    async run(message, args) {
        //message.say(InsultCommand.generateInsult())
    }
}