const { RichEmbed } = require('discord.js');
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true});
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "say",
  category: "moderation",
  description: "Tvá zpráva bude napsána za bota",
  run: async (client, message, args) => {
           const member = getMember(message, args.join(" "))
const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}}).then(m => m.delete(1999));


if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}})

  if(args[0].toLowerCase() === "embed") {
  if(message.content.includes("|")) {
    var title = message.content.split("|")[0]
    title = title.replace("!say embed","");
    var text = message.content.split("|")[1]

    var sayembed = new RichEmbed()
      .setTitle(title)
      .setColor("#576bff")
      .setDescription(text);

    const esayMessage = args.slice(1).join(" ");
    message.delete().catch(O_o=>{});


    message.channel.send(sayembed)
    } else {
        return;
    }
  } else {
    message.channel.send(args.join(" "))
  }
}
}
