const Discord = require('discord.js');

module.exports = {
  name: 'ghostping',
  execute(deletedMessage) {
    if (deletedMessage.mentions.members.first()) {
      const mentionedUser = deletedMessage.mentions.members.first();
      const ghostPingMessage = `**Ghost Ping:** ${deletedMessage.author} spingował(a) ${mentionedUser} i usunął(a) wiadomość.`;
      
      deletedMessage.channel.send(ghostPingMessage);
    }
  }
};
