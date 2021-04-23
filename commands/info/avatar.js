const { RichEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  category: "info",
  description: "Odešle uživatelův avatar!",
  run: async (client, message, args) => {
const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}}).then(m => m.delete(1999))

let user = message.mentions.users.first() || message.author;

            let AsukaAvatar = new RichEmbed()
            .setImage(user.displayAvatarURL)
            .setColor("#576bff")
            .setTimestamp()
            .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL);


            message.channel.send(AsukaAvatar)
  }
}