import client from './database/discordClient';
import dotenv from 'dotenv';

dotenv.config();

const tokenBot = process.env.BOT_TOKEN;

client.on('ready', () => {
  if (client.user) {
    console.log(`Bot logado como ${client.user.tag}`);
  } else {
    console.log('Bot logado, mas client.user é null');
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(tokenBot);
