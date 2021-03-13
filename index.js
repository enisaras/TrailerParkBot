//Add required modules etc.
const fs = require('fs');
//Discord objects
const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();
client.commands = new Discord.Collection();
//Add all the command files dynamically
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', async () => {
	console.log(`Logged in as ${client.user.id}!`);
});

client.on('message', message => {
    prefix = "!";
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);
	if(!client.commands.has(commandName)) return;
	try {
		command.execute(message, args);
		}
	catch (error){
		console.error(error);
		message.reply('Something went wrong, please try again!')
	}
	});
    
client.login(process.env.DISCORD_TOKEN);