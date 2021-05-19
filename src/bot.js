require('dotenv').config({ path: '../.env'});

const tmi = require('tmi.js');
const tmiClientOptions = require('./tmi-client/tmiConfig');
const comandos = require('./chat-commands/comandos');
const client = new tmi.client(tmiClientOptions);

client.connect();
client.on('message', onMessageHandler);

function onMessageHandler(target, context, msg, self){
    if (self) return;
    msg = msg.toLocaleLowerCase();
    const result = comandos(msg);

    if (result != null) {
        client.say(target, result);
    }
}

// client.on('message', (channel, tags, message, self) => {
//     const isNotBot = tags.username.toLocaleLowerCase() !== process.env.TWITCH_BOT_USERNAME;
//     // "Alca: Hello, World!"
//     if (isNotBot) {
//         client.say(channel, `Message "${message} was sent by ${tags.username}`);
//     }
//     console.log(`${tags['display-name']}: ${message}`);
// });
