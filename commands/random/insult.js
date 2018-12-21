const { Command } = require('discord.js-commando');

module.exports = class InsultCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'insult',
            group: 'random',
            memberName: 'insult',
            description: "Einstein insults you",
        });
    }

    static generateInsult() {
        var defaultPrefixes = [
                'your nothing but a',
                'fuck you, you',
                'get out, you',
                'your mama is a',
                'wtf are you talking about you',
                'your face reminds me of a'
            ],
            insults = {
                a: 'tossing,bloody,shitting,wanking,stinky,raging,dementing,dumb,dipping,fucking,dipping,holy,maiming,cocking,ranting,twunting,hairy,spunking,flipping,slapping,sodding,blooming,frigging,sponglicking,guzzling,glistering,cock wielding,failed,artist formally known as,unborn,pulsating,naked,throbbing,lonely,failed,stale,spastic,senile,strangely shaped,virgin,bottled,twin-headed,fat,gigantic,sticky,prodigal,bald,bearded,horse-loving,spotty,spitting,dandy,fritzl-admiring,friend of a,indeterminable,overrated,fingerlicking,diaper-wearing,leg-humping,gold-digging,mong loving,trout-faced,cunt rotting,flip-flopping,rotting,inbred,badly drawn,undead,annoying,whoring,leaking,dripping,racist,slutty,cross-eyed,irrelevant,mental,rotating,scurvy looking,rambling,gag sacking,cunting,wrinkled old,dried out,sodding,funky,silly,unhuman,bloated,wanktastic,bum-banging,cockmunching,animal-fondling,stillborn,scruffy-looking,hard-rubbing,rectal,glorious,eye-less,constipated,bastardized,utter,hitler\'s personal,irredeemable,complete,enormous,go suck a,fuckfaced,broadfaced,titless,son of a,demonizing,pigfaced,treacherous,retarded'.split(','),
                b: 'cock,tit,cunt,wank,piss,crap,shit,arse,sperm,nipple,anus,colon,shaft,dick,poop,semen,slut,suck,earwax,fart,scrotum,cock-tip,tea-bag,jizz,cockstorm,bunghole,food trough,bum,butt,shitface,ass,nut,ginger,llama,tramp,fudge,vomit,cum,lard,puke,sphincter,nerf,turd,cocksplurt,cockthistle,dickwhistle,gloryhole,gaylord,spazz,nutsack,fuck,spunk,shitshark,shitehawk,fuckwit,dipstick,asswad,chesticle,clusterfuck,douchewaffle,retard'.split(','), 
                c: 'force,bottom,hole,goatse,testicle,balls,bucket,biscuit,stain,boy,flaps,erection,mange,twat,twunt,mong,spack,diarrhea,sod,excrement,faggot,pirate,asswipe,sock,sack,barrel,head,zombie,alien,minge,candle,torch,pipe,bint,jockey,udder,pig,dog,cockroach,worm,MILF,sample,infidel,spunk-bubble,stack,handle,badger,wagon,bandit,lord,bogle,bollock,tranny,knob,nugget,king,hole,kid,trailer,lorry,whale,rag,foot'.split(','),
                d: 'licker,raper,lover,shiner,blender,fucker,assjacker,butler,packer,rider,wanker,sucker,felcher,wiper,experiment,wiper,bender,dictator,basher,piper,slapper,fondler,plonker,bastard,handler,herder,fan,amputee,extractor,professor,graduate,voyeur'.split(',')
            },
            combos = ['a,b,c', 'a,b,d', 'b,c', 'b,d'],
            pre = defaultPrefixes[Math.random()*defaultPrefixes.length>>0],
            insult = combos[Math.random()*combos.length>>0].split(',').map(function(k) {
                return insults[k][Math.random()*insults[k].length>>0];
            }).join(' ');

            return pre + ' ' + insult;
    }

    async run(message, args) {
        message.say(InsultCommand.generateInsult())

        // if (message.mentions.users === undefined) {
        //     message.say(InsultCommand.generateInsult());
        // }

        // message.mentions.users.forEach(user => {
        //     message.say(InsultCommand.generateInsult(), { reply: user });
        // });
    }
}