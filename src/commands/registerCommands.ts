import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!;
const tokenBot = process.env.BOT_TOKEN!;

// Criar comando de barra
const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Responde com Pong!'),
  new SlashCommandBuilder().setName('help').setDescription('Lista todos os comandos disponíveis'),
].map((command) => command.toJSON());

// Registrar comandos na API do Discord
const rest = new REST({ version: '9' }).setToken(tokenBot);

export const registerCommands = async () => {
  try {
    console.log('Começando o registro dos comandos de barra...');

    // Registra os comandos apenas no servidor (guild)
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

    console.log('Comandos de barra registrados com sucesso!');
  } catch (error) {
    console.error('Erro ao registrar os comandos de barra:', error);
  }
};

export default registerCommands;
