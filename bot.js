const Discord = require('discord.js');
const client = new Discord.Client();
var date = new Date();
var current_hour = date.getHours();
const prefix = "!";

//test
//test 2



client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});



client.on('message', message => {
    if (message.content === 'horloge') {
        var current_hour = date.getHours();
    	message.reply('Il est ' + current_hour + ' heures aujourdhui');
  	}
});

client.on('message', message => {
    if (message.content === 'tg le bot') {
    	message.reply('C pas gentil :(');
  	}
});

client.on('message', message => {
    if (message.content === 'nope') {
    	message.reply('Correction : Nope.AVI');
  	}
});


client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
        if(command === "blsay") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
            
        message.delete().catch(O_o=>{});
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }
});            

client.on('message', message => {
    if (message.content === 'kepanais') {
        message.channel.send('ATTENTION, IL A DIT KEPANAIS!!!');
    }
});

client.on('message', message => {
    if (message.content === 'zapobby') {
        message.channel.send('ATTENTION, IL A DIT ZAPOBBY!!! @everyone');
    }
});

client.on('message', message => {
    if (message.content === 'ptn') {
        message.channel.send('ATTENTION, IL A DIT PTN!!! @everyone');
    }
});

client.on('message', message => {
    if (message.content === 'prout') {
        message.channel.send('ATTENTION, IL A DIT PROUT!!! C UN GROS ABDL!!! :warning: @everyone');
    }
});

client.on('message', message => {
    if (message.content === 'caca') {
        message.channel.send('ATTENTION, IL A DIT CACA!!! C UN GROS ABDL!!! :warning: @everyone');
    }
});

client.on('message', message => {
    if (message.content === 'NO U') {
        message.channel.send('NO, U !!!');
    }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
