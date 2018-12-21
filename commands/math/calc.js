const { Command } = require('discord.js-commando');
const math = require('mathjs');

module.exports = class CalculateExpressionCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'calc',
            group: 'math',
            memberName: 'calc',
            description: "Einstein does your math for you",
            args: [
                {
					key: 'expression',
					label: 'expression',
					prompt: 'Expression for einstein to calculate.',
					type: 'string',
					infinite: false
                }
            ]
        });
    }

    async run(message, args) {
        message.say(math.eval(args.expression));
    }
}