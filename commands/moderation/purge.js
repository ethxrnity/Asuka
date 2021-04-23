  
const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "purge",
  category: "moderation",
  aliases: ["clear"],
  description: "Smaže určitý počet zpráv",
  run: async (client, message, args) => {
const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
}}).then(m => m.delete(1999));


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}})

  if (isNaN(args[0]) || parseInt(args[0]) <= 0) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Bohužel se nejedná o platné číslo!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}})

  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemám dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}})

  let deleteAmount;

  if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
  } else {
      deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(args[0])
      
           var AsukaPurge = new RichEmbed()

           .setDescription(`Bylo úspěšně odebráno **${args[0]}** nežádoucích zpráv!`)
           .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
           .setColor('#576bff')

           .setTimestamp();
           message.channel.send(AsukaPurge);


}
}