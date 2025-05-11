import registerCommands from '../commands/registerCommands';
import clientDiscord from '../database/discordClient';

clientDiscord.once('ready', () => {
  if (clientDiscord.user) {
    console.log(`Bot logado como ${clientDiscord.user.tag}`);
    registerCommands();
  } else {
    console.log('Bot logado, mas client.user é null');
  }
});
