const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Vyhodí nechtěného uživatele",
  run: async (client, message, args) => {
           const member = getMember(message, args.join(" "));
const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}}).then(m => m.delete(1999));

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}})

let logs = message.guild.channels.find("name", "logs");
if(!logs) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Nebyl nalezen kanál s názvem **logs**, vytvoř ho prosím!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

let user = message.mentions.users.first();
if(!user) return message.channel.send({embed: {
  color: 5729279,
  description: "<:AsukaInfo:828189065080864789> Prvně označ uživatele, kterého chceš vyhodit!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}});

let kReason = args.join(" ").slice(22);
if(!kReason) kReason = "Důvod nebyl uveden";

message.guild.member(user).kick(kReason);

let logsEmbed = new RichEmbed()
.setTitle("Uživatel byl vyhozen!")
.setFooter("Banující: " + message.author.username, message.author.avatarURL)
.setThumbnail(member.user.displayAvatarURL)
.setColor("#576bff")
.setTimestamp()
.addField("Vyhozen:", `${user}`)
.addField("Důvod:", kReason)
.addField("Admin:", `${message.author}`)

logs.send(logsEmbed);
}
}
