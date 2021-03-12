import os
from discord.ext.commands import Bot
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
bot = Bot(command_prefix='$')
response = discord.Embed(title = "Here is my source code dickweed.", url = "https://github.com/enisaras/TrailerParkBot")
@bot.event
async def on_ready():
	print(f'Bot connected as {bot.user}')
	
@bot.event
async def on_message(message):
	if message.content == 'code':
		await message.channel.send(embed = response)
		
bot.run(TOKEN)