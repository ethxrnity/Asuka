const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "closeorder",
  category: "server",
  description: "Uzavře tvou objednávku!",
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));
    const msg = await message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }}).then(m => m.delete(1999));

let uzivatel = message.author.username      

message.channel.setParent('836602360742543421');
      message.channel.setName(`closed-objednavka-${uzivatel}`);  
      
const channel = client.channels.find(channel => channel.name === `objednavka-${message.author.id}`)

let everyone = message.guild.roles.find("name", "@everyone");
channel.overwritePermissions(everyone, {
    SEND_MESSAGES: false,
    READ_MESSAGES: false,
    VIEW_CHANNEL: false
});
channel.overwritePermissions(message.author, {
    SEND_MESSAGES: false,
    READ_MESSAGES: true,
    VIEW_CHANNEL: false
});

   const AsukaOrder = new RichEmbed()

   .setDescription(`Objednávka uživatele ${message.author.username}, byla úspěšně uzavřena!`)
   .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
   .setColor('#576bff')

   .setTimestamp();
   message.channel.send(AsukaOrder);
 }
 }
