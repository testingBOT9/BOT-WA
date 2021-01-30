const { create, Client } = require('@open-wa/wa-automate');
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require(''./utils)
const HandleMsg = require('./HandleMsg')

async functions start()=

client.on('qr', (qr) => {

    console.log('QR RECEIVED', qr);
    qrcode.generate(qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
