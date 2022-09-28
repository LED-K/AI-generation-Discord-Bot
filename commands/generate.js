const {SlashCommandBuilder} = require('@discordjs/builders');
const {CommandInteraction} = require('discord.js');
const fs = require('fs')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('generate')
        .setDescription('Generates a Stranger Worlds Banner'),
     
    
    /**
     * 
     * @param {CommandInteraction} interaction 
     */


    async execute(interaction) {
       const files = await fs.promises.readdir ('steps');
       let counter = 0;
       for(const file of files){
        if(counter == 0){
            let file_path = 'steps\\'+file;
            await interaction.reply({files: [file_path]});
        }else{
            let file_path = 'steps\\'+file;
            await interaction.editReply({files: [file_path]});
        }   
        await new Promise(resolve => setTimeout(resolve, 5000));
        counter = counter+1;
       }

       // console.log("ooooooooooooy" + option.value);
        return 0;

    }
}
