const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  category: "info",
  description: "Odešle informace ohledně serveru!",

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

let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    const useruser = "Požadavek od: " + message.author.username;
    const userurl = message.author.avatarURL;
    let AsukaServer = new RichEmbed()
    .setAuthor(message.guild.name, sicon)
    .setColor("#576bff")
    .setThumbnail(sicon)
    .addField(`Serverové informace`, stripIndents`**Název serveru**: ${message.guild.name}
    **Rolí**: ${message.guild.roles.size}
    **Kanálů**: ${message.guild.channels.size}`, true)
    .addField(`Uživatelské informace`, stripIndents`**Uživatelů**: ${message.guild.memberCount}
    **Botů**: ${message.guild.members.filter(m => m.user.bot).size}
    **Online**: ${online.size}`, true)

    .setFooter(useruser, userurl)
    .setTimestamp()

    message.channel.send(AsukaServer)


    }
    }