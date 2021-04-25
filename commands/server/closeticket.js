const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "closeticket",
  category: "server",
  description: "Uzavře tvůj ticket!",
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


const channel = client.channels.find(channel => channel.name === `ticket-${message.author.id}`)

let everyone = message.guild.roles.find("name", "@everyone");
channel.overwritePermissions(everyone, {
    SEND_MESSAGES: false,
    READ_MESSAGES: false
});
channel.overwritePermissions(message.author, {
    SEND_MESSAGES: false,
    READ_MESSAGES: true
});

   const AsukaTicket = new RichEmbed()

   .setDescription(`Ticket uživatele ${message.author.username}, byl úspěšně uzavřen!`)
   .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
   .setColor('#576bff')

   .setTimestamp();
   message.channel.send(AsukaTicket);
 }
 }
