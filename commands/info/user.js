const { getMember, formatDate } = require("../../functions.js");
const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "user",
  aliases: ["userinfo", "whois", "who"],
  category: "info",
  description: "Pošle informace o daném uživateli",
  usage: "[nickanem | id | označení]",
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

const pripojen = formatDate(member.joinedAt);
const role = member.roles
    .filter(r => r.id !== message.guild.id)
    .map(r => r)
    .join(", ") || "none";

const vytvoreno = formatDate(member.user.createdAt);

const AsukaUser = new RichEmbed()
    .setFooter("Požadek od: " + message.author.username, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor("#576bff")

    .addField(`Členské Inforamce`, stripIndents`**Nickname:** ${member.displayName}
    **Připojen dne:** ${pripojen}
    **Role:** ${role}`, true)

    .addField(`Uživatelské Informace`, stripIndents`**ID:** ${member.user.id}
    **Uživatelské jméno:** ${member.user.username}
    **Discord Tag:** ${member.user.tag}
    **Vytvořeno dne:** ${vytvoreno}`, true)

    .setTimestamp()

if (member.user.presence.game)
   AsukaUser.addField(`Momentálně hraje`, `**Název:** ${member.user.presence.game.name}`);


if(message.member.hasPermission("MANAGE_MESSAGES"))
   AsukaUser.addField(`Staff Inforamce`,`Tento uživatel patří pod Host.Frantata.Cz!`);


message.channel.send(AsukaUser);
  }
}
