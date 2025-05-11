import clientDiscord from '../database/discordClient';

clientDiscord.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'help') {
    const helpMessage = `
      **Comandos disponíveis:**
      - /ping: Responde com Pong!
      - /help: Lista todos os comandos disponíveis
    `;
    await interaction.reply(helpMessage);
  }
});
