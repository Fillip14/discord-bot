import './modules/clientOnline';
import './modules/interactionsBot';
import clientDiscord from './database/discordClient';
import dotenv from 'dotenv';

dotenv.config();

const tokenBot = process.env.BOT_TOKEN;

clientDiscord.login(tokenBot);
