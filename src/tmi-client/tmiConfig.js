require('dotenv').config({ path: '../.env'});

const tmiClientOptions = {
    channels: [process.env.CHANNEL],
    connection: {
        reconnect: true
    },
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWTICH_OAUTH_TOKEN
    }
};

module.exports = tmiClientOptions;
