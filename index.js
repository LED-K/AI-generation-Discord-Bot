const fs = require('fs');
require('dotenv').config();
const {Client, Collection, GatewayIntentBits} = require('discord.js');
const token= process.env.TOKEN;
const handleCommand = require('./helpers/command');
const client = new Client({intents : [GatewayIntentBits.Guilds]});
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(token);

var http = require('http');

http.createServer().listen(process.env.PORT || 5000);

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready',() =>{
    console.log("ready when you are");
});

client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()){
        handleCommand(client,interaction);
    }
});

client.login(token);