const Discord = require('discord.js');
const client = new Discord.Client();


client.on('messageDelete', async (deletedMessage) => {
    if (deletedMessage.mentions.members.first()) {
      const mentionedUser = deletedMessage.mentions.members.first();
      const ghostPingMessage = `**Ghost Ping:** ${deletedMessage.author} spingował(a) ${mentionedUser} i usunął(a) wiadomość.`;
      
      deletedMessage.channel.send(ghostPingMessage);
    }
  });